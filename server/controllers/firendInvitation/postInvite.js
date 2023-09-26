const User = require("../../models/user.model");
const FriendInvitation= require("../../models/friendInvitation.model");
const friendsUpdate = require('../../socketHandlers/updates/friends')
const postInvite= async(req,res)=>{
  
    const {userId,mail}= req.user;
    const {targetMailAddress}= req.body;
console.log(mail, targetMailAddress);
    // check if friend that we would like to invite is not user

    if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
        return res.status(409).send('Sorry you cannot become friend with yourself')
    }
   
  
    const targetUser = await  User.findOne({mail: targetMailAddress.toLowerCase()})

   if (!targetUser) {
     return res.status(404).send(`Friend of ${targetMailAddress} has not found.Please check email address`);
   }
   // check if invitation has been already sent
   const invitationAlreadyrecived=  await FriendInvitation.findOne({
    senderId: userId,
    reciverId: targetUser._id
   })
   if (invitationAlreadyrecived) {
    return res.status(409).send(`Invitaion has been already send`);
   }

   // check if the user which we would like to invite is already our friend
    const userAlreadyFriends= targetUser.friends.find(friendId => friendId.toString() === userId.toString());

    if (userAlreadyFriends) {
        return res.status(409).send(`friend already added.Please check friend list`);  
    }

    // create new invitation  in databse 
    const newInvitation= await FriendInvitation.create({
        senderId: userId,
        reciverId: targetUser._id
    })
     // if invitaion hasbeen successfully created we would like to update friend
     // send pending invitaions update to specific user 
     friendsUpdate.updateFriendsPendingInvitation(targetUser._id.toString());
     return await res.status(201).send("Inviation has been sent");
          
    
};


module.exports=postInvite