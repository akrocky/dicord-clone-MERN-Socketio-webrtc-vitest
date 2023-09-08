import { styled } from "@mui/material"
interface IInputWithLabel{ 
    value:string;
    setValue:React.Dispatch<React.SetStateAction<string>>;
     label:string;
     type:string;
     placeholder:string;
  }

const Wrapper=styled('div')({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%',
    color:'#A5A5A8'
});
const Label=styled('p')({
    color:'#A5A5A8',
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:'16px'
});
const Input = styled('input')({
    flexGrow:1,
    height:'40px',
    border:'none',
    outline:'none',
    borderBottom:'2px solid #A5A5A8',
   
    background:'#F5F7FB',
    margin:0,
    fontSize:'16px',
    padding:'0 5px'
})
const InputWithLabel:React.FC<IInputWithLabel> = (props) => {
    const {value,setValue, label,type,placeholder}=props;
  return (
    <Wrapper>
 <Label >{label}</Label>
 <Input value={value} type={type} placeholder={placeholder} onChange={e=> setValue(e.target.value)}/>
    </Wrapper>
  )
}

export default InputWithLabel