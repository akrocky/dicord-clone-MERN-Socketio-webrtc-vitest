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
  const {localStream}=useAppSelector(selectRoom)
  return (
   <MainContainer>
  <Video stream={localStream} isLocalStream={true}/>
   </MainContainer>
  )
}

export default VideosContainer