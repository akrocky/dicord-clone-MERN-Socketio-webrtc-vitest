import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography } from "@mui/material";
import { useEffect, useState } from "react"
import InputWithLabel from "../shared/InputWithLabel";
import {validateMail} from "../../functions/validator"
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import { sendFriendInvitation } from "../../store/actions/friendAction";
import { useAppDispatch } from "../../hooks/useStore";

const AddFriendDialoge = ({
    isDailogOpen,
    closeDialogeHandler
}) => {

    const [mail, setMail]=useState('');
    const [isFormValid, setIsFormValid]= useState('');
    const dispatch= useAppDispatch();
    const handleSendInvitation= () =>{
    sendFriendInvitation({targetMailAddress:mail},closeDialogeHandler,dispatch)
    }
    const handleCloseDailog=()=>{
        closeDialogeHandler();
        setMail('');
    }
    useEffect(() => {
      
setIsFormValid(validateMail(mail))
    }, [mail,setIsFormValid]);
    
    
  return (
    <div>
        <Dialog open={isDailogOpen}  onClose={handleCloseDailog}>
   <DialogTitle>
    <Typography>Invite a Friend</Typography>
   </DialogTitle>
   <DialogContent>
    <DialogContentText>
    <Typography>Enter e-mail address of friend which you would like to invite</Typography>
    </DialogContentText>
    <InputWithLabel value={mail} setValue={setMail} label='Mail' type='text' placeholder='Enter mail address'/>
   </DialogContent>
   <DialogActions>
    <CustomPrimaryButton label="Send" disabled={!isFormValid} onclick={handleSendInvitation} addStyles={{
        marginLeft:'15px',
        marginRight:'15px',
        marginBottom:'10px'
    }}/>
   </DialogActions>
        </Dialog>
    </div>
  )
}

export default AddFriendDialoge
