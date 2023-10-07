import { Videocam, VideocamOff } from "@mui/icons-material";
import { IconButton } from "@mui/material"
import { useState } from "react"
import { useAppSelector } from "../../../../hooks/useStore";
import { selectRoom } from "../../../../store/slicers/roomSlice";


const CameraButton = () => {
    const [cameraEnable, setCameraEnable]= useState(true);
    const {localStream}=useAppSelector(selectRoom)
    const handleToggleCamera=()=>{
      localStream.getVideoTracks()[0].enabled = !cameraEnable ; 
        setCameraEnable(!cameraEnable)
    }
  return (
   <IconButton onClick={handleToggleCamera} style={{color:'white'}}> 
{cameraEnable  ?   <Videocam/>: <VideocamOff/>}
   </IconButton>
  )
}

export default CameraButton



