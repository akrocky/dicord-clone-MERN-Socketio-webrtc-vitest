const socketStore= require("../serverStore");


const disConnectHandler=(socket)=>{
    socketStore.removeConnectedUser(socket.id)
}

module.exports=disConnectHandler;