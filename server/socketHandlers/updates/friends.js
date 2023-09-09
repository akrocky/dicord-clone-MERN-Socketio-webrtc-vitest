const User = require('../../models/user.model');
const FriendInvitation = require('../../models/friendInvitation.model');
const serverStore= require("../../serverStore");

const updateFriendsPendingInvitation= aynsc (userId)=>{
     try {
        const pendingInvitations= await  FriendInvitation.find({
             reciverId: userId
        }).populate('senderId', '_id username mail');

        // find if user of specified userId hs active connection

        
     } catch (error) {
       console.log(error); 
     }
};


