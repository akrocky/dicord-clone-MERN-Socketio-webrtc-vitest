const serverStore=require('../serverStore');
const roomUpdate= require("./updates/rooms");


const roomleaveHandler=async(socket,data)=>{
    const {roomId}=data;
    const activeRoom=await serverStore.getActiveRoom(roomId);
    if (activeRoom) {
       
     await   serverStore.leaveActiveRoom(roomId, socket.id);
        const updatedActiveRoom=await serverStore.getActiveRoom(roomId);
        if (updatedActiveRoom) {
            updatedActiveRoom.participants &&    updatedActiveRoom.participants.forEach((participant)=>{
                socket.to(participant.socketId).emit('room-participant-left',{
                    connUserSocketID: socket.id
                });
            })
        }
    };
    roomUpdate.updateRooms();
}

module.exports= roomleaveHandler;