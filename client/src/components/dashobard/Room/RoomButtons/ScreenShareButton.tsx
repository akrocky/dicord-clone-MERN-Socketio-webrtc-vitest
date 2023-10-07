import { ScreenShare, StopScreenShare } from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/useStore";
import { selectRoom, setShareScreenStream } from "../../../../store/slicers/roomSlice";
import { switchOutgoingTracks } from "../../../../functions/realtimeCommunication/webrtcHandler";


const constrains={
   audio:false,
   video:true
}
const ScreenShareButton = () => {
    const [screenShareEnable, setScreenShareEnable]= useState(false);
    const {localStream,screenSharingStream,isSreenSharingActive}=useAppSelector(selectRoom);
    const dispatch=useAppDispatch();
    const handleToggleScreenShare=async()=>{
      
       if (!screenShareEnable) {
         setScreenShareEnable(true)
         let stream= null; 
         try {
            
            stream = await navigator.mediaDevices.getDisplayMedia(constrains)
         } catch (error) {
            console.log(`screen sharing error : ${error}`);
         }
         if (stream) {
            dispatch(setShareScreenStream({screenSharingStream:stream,isSreenSharingActive:true}));

            // webrtcHandler . switchingOutgoing video tracks
            switchOutgoingTracks(stream);
         }
       }else{
         // webrtchandler switchoutgoing tracks
         switchOutgoingTracks(localStream);
         screenSharingStream.getTracks().forEach((t)=> t.stop());
         dispatch(setShareScreenStream({screenSharingStream:null,isSreenSharingActive:false}));
       }
    }
    return (
      <IconButton onClick={handleToggleScreenShare} style={{color:'white'}}> 
      {!screenShareEnable ?   <ScreenShare/> : <StopScreenShare/>}
         </IconButton>
    )
}

export default ScreenShareButton