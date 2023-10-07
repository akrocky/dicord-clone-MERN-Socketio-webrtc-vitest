import { styled } from "@mui/material"
import ScreenShareButton from "./ScreenShareButton"
import CameraButton from "./CameraButton"
import CloseRoomButton from "./CloseRoomButton"
import MicButton from "./MicButton"
import { useAppSelector } from "../../../../hooks/useStore"
import { selectRoom } from "../../../../store/slicers/roomSlice"

const MainContainer= styled('div')({
    height:'15%',
    width:'100%',
    backgroundColor:'#5865f2',
    borderTopLeftRadius:'8px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
})

const RoomButtons = () => {
  const {isUserJoinedWithOnlyWithAudio}= useAppSelector(selectRoom)
  return (
    <MainContainer>
 { !isUserJoinedWithOnlyWithAudio &&    <ScreenShareButton/>}
      <MicButton/>
      <CloseRoomButton/>
    {!isUserJoinedWithOnlyWithAudio &&    <CameraButton/>}
        
    </MainContainer>
  )
}

export default RoomButtons