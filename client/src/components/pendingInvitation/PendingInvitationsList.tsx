import { styled } from "@mui/material"
import PendingInvitaionListItem from "./PendingInvitaionListItem";
import { useAppSelector } from "../../hooks/useStore";
import { selectFriend } from "../../store/slicers/friendSlice";



const MainContainer=styled('div')({
    width:'100%',
    height:'22%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
})

const PendingInvitationsList = () => {
  const friendSlice= useAppSelector(selectFriend);
 

  return (
    <MainContainer>
{
  friendSlice.pendingFriendsInvitations && (   
    friendSlice.pendingFriendsInvitations.map(invitaion =>(
    <PendingInvitaionListItem 
  key={invitaion.senderId
.    _id}
  id={invitaion._id}
  username={invitaion.senderId.username}
  mail={invitaion.senderId.mail}
    />
  ))
  )
}
    </MainContainer>
  )
}

export default PendingInvitationsList