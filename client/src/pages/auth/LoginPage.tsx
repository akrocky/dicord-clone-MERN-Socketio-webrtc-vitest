import { useState } from "react"
import AuthBox from "../../components/auth/AuthBox"
import LoginPageHeader from "../../components/auth/Login/LoginPageHeader"
import LoginPageInputs from "../../components/auth/Login/LoginPageInputs"
import LoginPageFooter from "../../components/auth/Login/LoginPageFooter"




const LoginPage = () => {
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  const [isFormValid,setIsFormValid]=useState(true);
  const handleLogin=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
  }
  return (
    <AuthBox >
     <LoginPageHeader/>
     <LoginPageInputs email={mail} setEmail={setMail} password={password} setPassword={setPassword}/>
     <LoginPageFooter handleLogin={handleLogin} isFormValid={isFormValid}/>
    </AuthBox>
  )
}

export default LoginPage