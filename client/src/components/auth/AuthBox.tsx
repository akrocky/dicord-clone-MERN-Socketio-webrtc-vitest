import { Box, styled } from '@mui/material';
import React  from "react";
interface IAuthBoxProps{ 
    // Define your regular props here
    children: JSX.Element[] | JSX.Element;
   
    // ... other props
  }
const BoxWrapper=styled('div')({
    width:'100%',
    height:'100vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#F5F7FB'
})

const AuthBox:React.FC<IAuthBoxProps>=({children })=> {
  return (
    <BoxWrapper>
         <Box component="span" sx={{ width: 700, height: 400 ,bgcolor:'#FFFFFF',borderRadius:'5px',boxShadow:'0 2px 10px 0 rgb(0 0 0 / 20%)',  display:'flex',flexDirection:'column',padding:'25px'}}>
         {children}
          </Box>
 
    </BoxWrapper>
  )
}

export default AuthBox