import InputWithLabel from "../../shared/InputWithLabel"

interface IRegisterPageInputs{ 
  
  name:string;
  setName:React.Dispatch<React.SetStateAction<string>>;
  email:string;
  setEmail:React.Dispatch<React.SetStateAction<string>>;
  password:string;
  setPassword:React.Dispatch<React.SetStateAction<string>>;
}
 const RegisterPageInputs:React.FC<IRegisterPageInputs> = ({name,setName,email,setEmail,password,setPassword}) => {
  return (
    <>
    <InputWithLabel label="Name" type="text" placeholder="Enter name" value={name} setValue={setName}/>
    <InputWithLabel label="E-mail" type="email" placeholder="Enter e-mail adress" value={email} setValue={setEmail}/>
    <InputWithLabel label="Password" type="password" placeholder="Enter password" value={password} setValue={setPassword}/>
    </>
  )
}
export default RegisterPageInputs;