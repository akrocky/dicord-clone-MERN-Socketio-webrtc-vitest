const User = require("../../models/user.model");
const FriendInvitation= require("../../models/friendInvitation.model");
const friendsUpdate = require('../../socketHandlers/updates/friends');
const postReject= async(req,res)=>{
 try {
  const {id} =req.body;
  const {userId}= req.user;

  const invitaionExist= await FriendInvitation.exists({_id:id});
  
  if (invitaionExist) {
    
    await FriendInvitation.findByIdAndDelete(id);

  }
  // update pending invitaion
  friendsUpdate.updateFriendsPendingInvitation(userId);
  return res.status(200).send("Invitaion successfully rejected");
 } catch (error) {
  console.log(error);
  return res.status(500).send('Something went wrong,lease try agin')
 }
};


module.exports=postReject