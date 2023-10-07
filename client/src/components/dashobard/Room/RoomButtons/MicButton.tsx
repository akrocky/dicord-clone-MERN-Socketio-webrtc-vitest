import { Mic, MicOff } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useAppSelector } from "../../../../hooks/useStore";
import { selectRoom } from "../../../../store/slicers/roomSlice";


const MicButton = () => {
  const [micEnable, setMicEnable]= useState(true);
  const {localStream}=useAppSelector(selectRoom)
  const handleToggleMic=()=>{
      localStream.getAudioTracks()[0].enabled = !micEnable ; 
     setMicEnable(!micEnable)
  }
  return (
    <IconButton onClick={handleToggleMic} style={{color:'white'}}> 
    {micEnable ?   <Mic/> : <MicOff/>}
       </IconButton>
  )
}

export default MicButton