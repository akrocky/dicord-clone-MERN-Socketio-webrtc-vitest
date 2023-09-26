 const authSocket= require('./middleware/authSocket')
 const newConnectionHandler= require('./socketHandlers/newConnectionHandler');
 const disconnectHandler= require('./socketHandlers/handleDisconnect');
 const serverStore=require('./serverStore');
 const directMessageHandler =require('./socketHandlers/directMessageHandler');
 const directChatHistoryHandler =require('./socketHandlers/directChatHistoryHandler');
 const roomCreateHandler =require('./socketHandlers/roomCreate');
 const roomjoinHandler =require('./socketHandlers/roomjoinHandler');
 const roomleaveHandler =require('./socketHandlers/roomleaveHandler');
 const registerSocketServer=(server)=>{
    const io=require=require('socket.io')(server,{
        cors:{
            origin:'*',
            methods:['GET','POST']
        }
    });
  
serverStore.setSocketServerInstance(io);
    io.use((socket,next)=>{
     
      authSocket(socket,next)  
    });

    const emitOnlineUsers= ()=>{
      const onlineUsers= serverStore.getOnlineUsers();
      io.emit(
        'online-users',
        {onlineUsers}
      )
    };
  

    io.on('connection',(socket)=>{
     
       // new connection handler
       newConnectionHandler(socket,io);
       emitOnlineUsers();
       
       socket.on('direct-message',(data)=>{
        directMessageHandler(socket,data);
       });
       socket.on('direct-chat-history',(data)=>{
        directChatHistoryHandler(socket, data);
       });
       socket.on('room-create',()=>{
      
        roomCreateHandler(socket);
       });
       socket.on('room-join',(data)=>{
        roomjoinHandler(socket,data);
       });
       socket.on('room-leave',(data)=>{
        roomleaveHandler(socket,data);
       });

       socket.on('disconnect',()=>{
         disconnectHandler(socket);
       }
       

       );
      
    });
    setInterval(()=>{
      emitOnlineUsers();
    },[8000])
 }

 module.exports={
    registerSocketServer
 }