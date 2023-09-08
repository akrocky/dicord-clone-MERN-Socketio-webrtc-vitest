import CustomPrimaryButton from "../../shared/CustomPrimaryButton";
import React, { MouseEvent } from 'react';
import RedirectInfo from "../RedirectInfo";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";
interface IRegisterPageFooter{ 
    isFormValid:boolean;
    handleRegister:(event:MouseEvent<HTMLButtonElement>)=>void;
  }

  const getFormNotValidMessage=()=>{
 return 'Enter correct e-mail address and password should contains between 6 and 12 charecters'
  }
  const getFormValidMessage=()=>{
    return 'Press to Register!'
  }

const  RegisterPageFooter:React.FC<IRegisterPageFooter> = ({handleRegister,isFormValid}) => {
  const navigate=useNavigate()
  const handlePushToLogin=()=>{
   navigate('/login')
  }
  return (
    <>
    <Tooltip title={!isFormValid ? getFormNotValidMessage() : getFormValidMessage()}>
    <div>
        <CustomPrimaryButton label="Register" addStyles={{marginTop:"30px"}} disabled={!isFormValid} onclick={handleRegister}/>
    </div>
    </Tooltip>
    <RedirectInfo text='Already have an accont?' redirectText='Log in' additionalStyles={{marginTop:'5px'}} redirectHandler={handlePushToLogin}  />
    </>
  )
}

export default RegisterPageFooter