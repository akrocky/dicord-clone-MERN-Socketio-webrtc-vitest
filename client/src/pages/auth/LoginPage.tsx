import { useEffect, useState } from "react"
import AuthBox from "../../components/auth/AuthBox"
import LoginPageHeader from "../../components/auth/Login/LoginPageHeader"
import LoginPageInputs from "../../components/auth/Login/LoginPageInputs"
import LoginPageFooter from "../../components/auth/Login/LoginPageFooter"
import { validateLoginForm } from "../../functions/validator"
import { useAppDispatch } from "../../hooks/useStore"
import { login } from "../../store/actions/authAction"
import { useNavigate } from "react-router-dom"




const LoginPage = () => {
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  const [isFormValid,setIsFormValid]=useState(false);
  const dispatch= useAppDispatch();
  const naviate= useNavigate();
  useEffect(() => {
    setIsFormValid(validateLoginForm({mail,password}))
  
  }, [mail,password,setIsFormValid])
  
  const handleLogin=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
const userDetails={
  mail,
  password
}
login(userDetails,dispatch,naviate)

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