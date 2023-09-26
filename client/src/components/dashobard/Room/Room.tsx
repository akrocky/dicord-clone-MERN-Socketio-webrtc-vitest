import { styled } from "@mui/material"
import { useState } from "react";
import ResizeRoomButton from "./ResizeRoomButton";
import VideosContainer from "./VideosContainer";
import RoomButtons from "./RoomButtons/RoomButtons";

const MainContainer = styled('div')({
    position:'absolute',
    display:'flex',
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#202225'
});
const fullScreenRoomStyle={
    width:'100%',
    height:'100vh'
};
const minimizedRoomStyled={
    bottom:0,
    right:0,
    width:'30%',
    height:'40vh'
}

const Room = () => {
    const [isRoomMinimized, setIsRoomMinimized ]= useState(true);
    const roomReizeHandler =()=>{
        setIsRoomMinimized(!isRoomMinimized)
    };
  return (
  <MainContainer style={ isRoomMinimized ? minimizedRoomStyled : fullScreenRoomStyle}>
    <VideosContainer/>
    <RoomButtons/>
<ResizeRoomButton
isRoomMinimized={isRoomMinimized}
handleRoomResize={roomReizeHandler}
/>
  </MainContainer>
  )
}

export default Room