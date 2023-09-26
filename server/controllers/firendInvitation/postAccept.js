const User = require("../../models/user.model");
const FriendInvitation= require("../../models/friendInvitation.model");

const friendsUpdate = require('../../socketHandlers/updates/friends');
const postAccept= async(req,res)=>{
  try {
    const {id} =req.body;
   
  
    const invitation= await FriendInvitation.findById(id);
    
    if (!invitation) {
      
      return res.status(401).send('Error occured.Please try again')
  
    }
    const {senderId, reciverId}= invitation;
    // add friends to both users
    const senderUser= await User.findById(senderId);
    senderUser.friends= [...senderUser.friends, reciverId];
    const reciverUser= await User.findById(reciverId);
    reciverUser.friends= [...reciverUser.friends, senderId];
    await senderUser.save();
    await reciverUser.save();

    //delte invitaion after add in friends
    await FriendInvitation.findByIdAndDelete(id);

    // update list of the friends if the users are online


    // update list of friens pending invitaions
      friendsUpdate.updateFriendsPendingInvitation(reciverId.toString());

      // update this friend list
      friendsUpdate.updateFriends(senderId.toString());
      friendsUpdate.updateFriends(reciverId.toString());

      return res.status(200).send('Friends successfuly added')

   } catch (error) {
    console.log(error);
    return res.status(500).send('Something went wrong,lease try agin')
   }
    
};


module.exports=postAccept