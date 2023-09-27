/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import io from 'socket.io-client';
import { setFriends, setOnlineUsers, setPendingInvitation } from '../../store/slicers/friendSlice';
import { updateDirectChatHistoryIfActive } from '../../utils/chat';
import { newRoomCreated ,updateActiveRooms} from './roomHandler';
import { handleSingalingData, prepareNewPeerConnection } from './webrtcHandler';




let socket=null;


export const  connectWithSocketServer= (userDetails,dispatch  )=>{
  
   socket =   io('http://localhost:5000',{
        auth: {
            token:userDetails.token
        }
    });
   
   socket.on('connect',()=>{
console.log('successsfully connected with socket.io server');
    
    })

    socket.on("friends-invitations",(data)=>{
       

       const {pendingInvitations} = data ;

          dispatch( setPendingInvitation({pendingFriendsInvitations:pendingInvitations}) );
    })
    socket.on("friends-list",(data)=>{
       
       const {friends} = data ;

          dispatch( setFriends({friends}) );
    });
    socket.on("online-users",(data)=>{
        const {onlineUsers}=data;
        dispatch(setOnlineUsers({onlineUsers}))
       
    });
    socket.on('direct-chat-history',(data)=>{
        updateDirectChatHistoryIfActive(data)
    });
    socket.on('room-create',(data)=>{
        newRoomCreated(data);
    });
    socket.on('active-rooms',(data)=>{
        updateActiveRooms(data)
    });
    socket.on('connection-prepare',(data)=>{
        const {connUserSocketId}= data;
   
       prepareNewPeerConnection(connUserSocketId,false);
       socket.emit('connection-init',{connUserSocketId})
    });
    socket.on('connection-init',(data)=>{
        const {connUserSocketId}=data;
        prepareNewPeerConnection(connUserSocketId,true);
    })
    socket.on('connection-signal',(data)=>{
        handleSingalingData(data);
        
    })


};

export const sendDirectMessage=(data)=>{
    socket.emit("direct-message", data)
};
export const getDirectChatHistory=(data)=>{
    socket.emit("direct-chat-history",data);
};

export const createNewRoom = () => {
 
    socket.emit('room-create');
};

export const joinRoom=(data)=>{
    socket.emit('room-join',data);
}

export const leaveRoom=(data)=>{
    socket.emit('room-leave',data)
};
export const signalPeerData=(data)=>{
     socket.emit('connection-signal',data)
}