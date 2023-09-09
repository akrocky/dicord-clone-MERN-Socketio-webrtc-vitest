import * as Api from '../../functions/api';
import { setAlertDetails } from '../slicers/alertSlice';




export const sendFriendInvitation=async(data, closeDailogHandler,dispatch)=>{

    const response= await Api.sendFriendInvitaion(data) ;

    if (response.error) {
        const message= response.exception?.response?.data as string;
        const open=true;
        const severity='error'
        dispatch(setAlertDetails({message,open,severity}))
    }else{
        console.log("ahcheee");
        dispatch(setAlertDetails({message:"Invitaion has sent!",open:true,severity:"success"}))
        // dispatch(setAlertDetails({message:response.exception.response.data,open:true,severity:"Error",}))
        closeDailogHandler();
    }

}


