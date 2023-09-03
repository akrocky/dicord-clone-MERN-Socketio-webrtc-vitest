import { Button } from "@mui/material";
import React, { MouseEvent } from 'react';
interface ICustomPrimaryButton {
    label:string;
    addStyles?: object;
    disabled:boolean;
    onclick:(event:MouseEvent<HTMLButtonElement>) =>void
}


const CustomPrimaryButton:React.FC<ICustomPrimaryButton> = ({
    label,addStyles,disabled,onclick
}) => {
  return (
   <Button variant="contained"  sx={{
    background:'#A5A5A8',
    color:'#F5F7FB',
    transform:'none',
    fontSize:'16px',
    fontWeight:5,
    width:'100%',
    height:'40px',
    cursor:'pointer'
   }}
   style={ addStyles ? addStyles : {}}
   onClick={onclick}
   disabled={disabled}
   >
   {label}
   </Button>
  )
}

export default CustomPrimaryButton