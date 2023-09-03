import InputWithLabel from "../InputWithLabel"

interface ILoginPageInputs{ 
  email:string;
  setEmail:React.Dispatch<React.SetStateAction<string>>;
  password:string;
  setPassword:React.Dispatch<React.SetStateAction<string>>;
}
 const LoginPageInputs:React.FC<ILoginPageInputs> = ({email,setEmail,password,setPassword}) => {
  return (
    <>
    <InputWithLabel label="E-mail" type="email" placeholder="Enter e-mail adress" value={email} setValue={setEmail}/>
    <InputWithLabel label="Password" type="password" placeholder="Enter password" value={password} setValue={setPassword}/>
    </>
  )
}
export default LoginPageInputs;