const User = require('../../models/user.model');
const FriendInvitation = require('../../models/friendInvitation.model');
const serverStore= require("../../serverStore");

const updateFriendsPendingInvitation= async(userId)=> {
     try {
        const pendingInvitations= await  FriendInvitation.find({
             reciverId: userId
        }).populate('senderId', '_id username mail');

        // find all active connections of specific userId

        const reciverList=serverStore.getActiveConnections(userId);
       
        const io=serverStore.getSocketServerInstance();

          reciverList.forEach(reciverSocketId=>{
               io.to(reciverSocketId).emit('friends-invitations',{
                    pendingInvitations: pendingInvitations ? pendingInvitations : []
               })
          })
        
     } catch (error) {
       console.log(error); 
     }
};

const updateFriends= async (userId)=>{
     try {
           // find active connections of specific id ( online users )
           const reciverList = serverStore.getActiveConnections(userId);
           if (reciverList.length > 0) {
               
           
          const user= await User.findById(userId,{_id:1,friends:1}).populate(
               'friends',
               '_id username mail'
          );
          if (user) {
               const friendsList=user.friends.map(f =>{
                   return {
                    id:f.id,
                    mail:f.mail,
                    username:f.username
                   } 
               });

              


               // get io server instance

               const io=serverStore.getSocketServerInstance();
               reciverList.forEach(reciveSocketId=>{
               io.to(reciveSocketId).emit('friends-list',{
                    friends: friendsList ? friendsList : []
               })
               });
          }
     }
     } catch (error) {
          console.log(error);
     }
}

module.exports ={
     updateFriendsPendingInvitation,
     updateFriends
}