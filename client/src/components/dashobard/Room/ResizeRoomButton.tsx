import { CloseFullscreen, OpenInFull } from "@mui/icons-material"
import { IconButton, styled } from "@mui/material"

const MainContainer=styled('div')({
position:'absolute',
bottom:'10px',
right:'10px'
})
const ResizeRoomButton = ({isRoomMinimized,handleRoomResize}) => {
  return (
    <MainContainer>
   <IconButton style={{color:'white'}} onClick={handleRoomResize}>
 {isRoomMinimized ? <OpenInFull /> : <CloseFullscreen/>}
   </IconButton>
    </MainContainer>
  )
}

export default ResizeRoomButton