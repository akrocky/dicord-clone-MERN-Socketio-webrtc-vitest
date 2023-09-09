import io from 'socket.io-client';
import { useAppDispatch } from '../../hooks/useStore';
import { setPendingInvitation } from '../../store/slicers/friendSlice';


let socket=null;

export const  connectWithSocketServer=(userDetails)=>{
     
    socket=io('http://localhost:5000',{
        auth: {
            token:userDetails.token
        }
    });

    socket.on('connect',()=>{
console.log('successsfully connected with socket.io server');
console.log(socket.id);
    })

    socket.on("friends-invitations",(data)=>{
        const dispatch= useAppDispatch();
       const {pendingInvitations} = data ;

          dispatch( setPendingInvitation(pendingInvitations) );
    })
}