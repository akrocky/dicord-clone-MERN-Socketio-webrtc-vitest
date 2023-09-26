import { styled } from "styled-components"
import MainPageButton from "./MainPageButton"
import CreateRoomButton from "./CreateRoomButton"
import { useAppSelector } from "../../../hooks/useStore"
import { selectRoom } from "../../../store/slicers/roomSlice"
import ActiveRoomButton from "./ActiveRoomButton"

const MainContainer = styled('div')({
  width:"72px",
  height:"100%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  backgroundColor:"#202225"
})
export const SIdeBar = () => { 
  const {activeRooms}= useAppSelector(selectRoom);
  const {isUserInRoom}=useAppSelector(selectRoom);
  return (
    <MainContainer>
      <MainPageButton/>
      <CreateRoomButton/>
      {
        activeRooms?.map((room)=>(
         <ActiveRoomButton
         roomId={room.roomId}
         creatorUsername={room.creatorUsername }
         amountOfParticipants={room.participants.length
         }
         key={room.roomId}
         isUserInRoom={isUserInRoom}
         /> 
        ))
      }
    </MainContainer>
  )
}
