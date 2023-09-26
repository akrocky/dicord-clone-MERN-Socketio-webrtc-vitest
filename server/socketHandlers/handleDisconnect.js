const socketStore= require("../serverStore");
const roomleaveHandler= require("./roomleaveHandler");

const disConnectHandler=(socket)=>{
    const activeRooms= socketStore.getActiveRooms();
    activeRooms.forEach(activeRoom=>{
      const userInRoom= activeRoom.participants.some(participant => participant.socketId === socket.id) ;
      
      if (userInRoom) {
        roomleaveHandler(socket,{roomId: activeRoom.roomId})
      }
    })
    socketStore.removeConnectedUser(socket.id)
}

module.exports=disConnectHandler;