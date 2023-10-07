 const {v4: uuidv4}=require('uuid');
 const connectedUsers= new Map();
 let activeRooms=[];
let io;
const setSocketServerInstance=(ioInstance)=>{
   io= ioInstance;
}

const getSocketServerInstance=()=>{
   return io;
}

 const addNewConnectedUser= ({socketId,userId})=>{

    connectedUsers.set(socketId,{userId});
 
 }
 const removeConnectedUser =(socketId)=>{
    if (connectedUsers.has(socketId)) {
      connectedUsers.delete(socketId);
   
    }
 }

 const getActiveConnections=(userId)=>{
  
   const activeConnecctions=[];
       
   connectedUsers.forEach(function (value,key) {

  
      if (value.userId === userId) {
         activeConnecctions.push(
            key
         )
      }
   })

   return activeConnecctions;
 }

 const getOnlineUsers=()=>{
   const onlineUsers=[];
   connectedUsers.forEach((value,key)=>{
onlineUsers.push({socketId:key,userId:value.userId});
   });
   return onlineUsers;
 };
 // rooms

 const addNewActiveRoom=(userId,socketId)=>{
   const newActiveRoom={
      roomCreator:{
         userId,
         socketId
      },
      participants:[
         {userId,socketId}
      ],
      roomId: uuidv4()
   };
   activeRooms=[...activeRooms,newActiveRoom];

   return newActiveRoom;
 };
 const getActiveRoom=(roomId)=>{
   const activeRoom= activeRooms.find(room=> room.roomId=== roomId);
   if (activeRoom) {
      return {...activeRoom}
   }else{
      return null;
   }
  
 }
 const leaveActiveRoom=(roomId, participantsocketId)=>{
   const activeRoom= activeRooms.find(room=> room.roomId=== roomId);
   if (activeRoom) {
      const copyOfActiveRoom={...activeRoom};
      copyOfActiveRoom.participants= copyOfActiveRoom.participants.filter(participant=> participant.socketId !== participantsocketId );

     activeRooms= activeRooms.filter(room=> room.roomId !== roomId);
     if (copyOfActiveRoom.participants.length >0) {
      activeRooms.push(copyOfActiveRoom);
     }
   }
 }
 const getActiveRooms=()=>{
   return [...activeRooms];
 }
 const joinActiveRoom=(roomId,newParticpant)=>{
  const room =activeRooms.find(room=> room.roomId===roomId);
  activeRooms= activeRooms.filter((room)=> room.roomId !== roomId);
  const updatedRoom={
   ...room,
   participants: room.participants ?  [...room.participants,newParticpant]:[newParticpant]
  }
activeRooms.push(updatedRoom);

 };


 module.exports={
    addNewConnectedUser,
    removeConnectedUser,
    getActiveConnections,
    getSocketServerInstance,
    setSocketServerInstance,
    getOnlineUsers,
    addNewActiveRoom,
    getActiveRoom,
    getActiveRooms,
    joinActiveRoom,
    leaveActiveRoom
 }