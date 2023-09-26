import { Mic, MicOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";


const MicButton = () => {
  const [micEnable, setMicEnable]= useState(true);
  const handleToggleMic=()=>{
     setMicEnable(!micEnable)
  }
  return (
    <IconButton onClick={handleToggleMic} style={{color:'white'}}> 
    {micEnable ?   <Mic/> : <MicOff/>}
       </IconButton>
  )
}

export default MicButton