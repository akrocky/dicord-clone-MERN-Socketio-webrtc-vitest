import { useEffect, useState } from "react"
import AuthBox from "../../components/auth/AuthBox"

import { validateLoginForm } from "../../functions/validator"
import RegisterPageInputs from "../../components/auth/Register/RegisterPageInputs"
import RegisterPageFooter from "../../components/auth/Register/RegisterPageFooter"
import RegisterPageHeader from "../../components/auth/Register/RegisterPageHeader"
import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../hooks/useStore"
import { register } from "../../store/actions/authAction"




const RegisterPage = () => {
  const [name,setName]=useState('')
  const [mail,setMail]=useState('')
  const [password,setPassword]=useState('')
  const [isFormValid,setIsFormValid]=useState(false);
  const dispatch= useAppDispatch();
  const naviate= useNavigate();
  useEffect(() => {
    setIsFormValid(validateLoginForm({mail,password}))
  
  }, [mail,password,setIsFormValid])
  
  const handleRegister=(event:React.MouseEvent<HTMLButtonElement>)=>{
event.preventDefault();
const userDetails={
 username: name,
  mail,
  password
}
register(userDetails,dispatch,naviate)
  }
  return (
    <AuthBox >
     <RegisterPageHeader/>
     <RegisterPageInputs name={name} setName={setName} email={mail} setEmail={setMail} password={password} setPassword={setPassword}/>
     <RegisterPageFooter handleRegister={handleRegister} isFormValid={isFormValid}/>
    </AuthBox>
  )
}

export default RegisterPage