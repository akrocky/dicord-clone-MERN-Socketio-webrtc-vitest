import { styled } from "@mui/material"
import ScreenShareButton from "./ScreenShareButton"
import CameraButton from "./CameraButton"
import CloseRoomButton from "./CloseRoomButton"
import MicButton from "./MicButton"

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
  return (
    <MainContainer>
      <ScreenShareButton/>
      <MicButton/>
      <CloseRoomButton/>
      <CameraButton/>
        
    </MainContainer>
  )
}

export default RoomButtons