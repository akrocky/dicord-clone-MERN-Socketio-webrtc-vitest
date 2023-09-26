import { Videocam, VideocamOff } from "@mui/icons-material";
import { IconButton } from "@mui/material"
import { useState } from "react"


const CameraButton = () => {
    const [cameraEnable, setCameraEnable]= useState(true);
    const handleToggleCamera=()=>{
        setCameraEnable(!cameraEnable)
    }
  return (
   <IconButton onClick={handleToggleCamera} style={{color:'white'}}> 
{cameraEnable  ?   <Videocam/>: <VideocamOff/>}
   </IconButton>
  )
}

export default CameraButton