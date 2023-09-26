const serverStore=require('../serverStore');
const updateFriends= require('./updates/friends');
const { updateRooms } = require('./updates/rooms');

const newConnectionHandler=async(socket, io)=>{
    const userDetails=socket.user;
 await   serverStore.addNewConnectedUser({
        socketId: socket.id,
        userId: userDetails.userId
    });

    // update pending friens invitaionlist
  await updateFriends.updateFriendsPendingInvitation(userDetails.userId);
 await  updateFriends.updateFriends(userDetails.userId);

await   updateRooms(socket.id)
};


module.exports= newConnectionHandler;
