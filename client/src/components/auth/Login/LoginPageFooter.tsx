import CustomPrimaryButton from "../CustomPrimaryButton";
import React, { MouseEvent } from 'react';
interface ILoginPageFooter{ 
    isFormValid:boolean;
    handleLogin:(event:MouseEvent<HTMLButtonElement>)=>void;
  }

const LoginPageFooter:React.FC<ILoginPageFooter> = ({handleLogin,isFormValid}) => {
  return (
    <div>
        <CustomPrimaryButton label="Log in" addStyles={{marginTop:"30px"}} disabled={!isFormValid} onclick={handleLogin}/>
    </div>
  )
}

export default LoginPageFooter