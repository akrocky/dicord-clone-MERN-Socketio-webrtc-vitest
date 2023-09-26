import * as Api from '../../functions/api';
import { setAlertDetails } from '../slicers/alertSlice';
import { setAcceptFriendInvitaion, setRejectFriendInvitaion } from '../slicers/friendSlice';




export const sendFriendInvitation=async(data, closeDailogHandler,dispatch)=>{

    const response= await Api.sendFriendInvitaion(data) ;

    if (response.error) {
        const message= response.exception?.response?.data as string;
        const open=true;
        const severity='error'
        dispatch(setAlertDetails({message,open,severity}))
    }else{
       
        dispatch(setAlertDetails({message:"Invitaion has sent!",open:true,severity:"success"}))
        // dispatch(setAlertDetails({message:response.exception.response.data,open:true,severity:"Error",}))
        closeDailogHandler();
    }

}


export const acceptFriendInvitaion= async(data,dispatch)=>{
    const response= await Api.acceptFriendInvitaionAPi(data) ;

    if (response.error) {
        const message= response.exception?.response?.data as string;
        const open=true;
        const severity='error'
        dispatch(setAlertDetails({message,open,severity}))
    }else{
 
        dispatch(setAlertDetails({message:'invitaion accepted',open:true,severity:"success",}))
        
        
    }

};
export const rejectFriendInvitaion= async(data, dispatch)=>{

    const response= await Api.rejectFriendInvitaionApi(data) ;

    if (response.error) {
      
        const message= response.exception?.response?.data as string;
        const open=true;
        const severity='error'
        dispatch(setAlertDetails({message,open,severity}))
    }else{
        
     
        dispatch(setAlertDetails({message:"invitaion's rejection is successfull",open:true,severity:"success",}))
    }
};


