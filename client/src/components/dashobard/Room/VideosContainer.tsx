import { styled } from "@mui/material"
import Video from "./RoomButtons/Video";
import { useAppSelector } from "../../../hooks/useStore";
import { selectRoom } from "../../../store/slicers/roomSlice";

const MainContainer= styled('div')({
height:'85%',
width:'100%',
display:'flex',
flexWrap:'wrap'
});

const VideosContainer = () => {
  const {localStream,remoteStreams,screenSharingStream}=useAppSelector(selectRoom);
  
  return (
   <MainContainer>
  <Video stream={screenSharingStream ? screenSharingStream :localStream} isLocalStream={true}/>
  {
  remoteStreams && remoteStreams.map((remoteStream)=>(
    <Video key={remoteStream.connUserSocketId} stream={remoteStream} isLocalStream={false}/>
  ))

  }
   </MainContainer>
  )
}

export default VideosContainer