import { useState } from "react";
import CustomPrimaryButton from "../shared/CustomPrimaryButton";
import AddFriendDialoge from "./AddFriendDialoge";

const additionalStyles={
    marginTop:'10px',
    marginLeft:'5px',
    width:'80%',
    height: '30px',
    background:'#3ba55d'
}
const AddFriendButton = () => {
    const [isDailogOpen, setIsDailogOpen]= useState(false);
    const handleOpenAddFriendDialog = ()=>{
        setIsDailogOpen(true)
    };
    const handleCloseAddFriendDailog=()=>{
        setIsDailogOpen(false)
    }
  return (
    <>
    <CustomPrimaryButton 
              addStyles={additionalStyles}
              label='AddFriend'
              onclick={handleOpenAddFriendDialog} disabled={false}    />
    <AddFriendDialoge isDailogOpen={isDailogOpen} closeDialogeHandler={handleCloseAddFriendDailog}/>
    </>

  )
}

export default AddFriendButton