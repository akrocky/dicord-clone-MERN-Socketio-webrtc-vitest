import { ScreenShare, StopScreenShare } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";


const ScreenShareButton = () => {
    const [screenShareEnable, setScreenShareEnable]= useState(true);
    const handleToggleScreenShare=()=>{
       setScreenShareEnable(!screenShareEnable)
    }
    return (
      <IconButton onClick={handleToggleScreenShare} style={{color:'white'}}> 
      {screenShareEnable ?   <ScreenShare/> : <StopScreenShare/>}
         </IconButton>
    )
}

export default ScreenShareButton