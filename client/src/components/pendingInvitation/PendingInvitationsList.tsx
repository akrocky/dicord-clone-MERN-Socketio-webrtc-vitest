import { styled } from "@mui/material"
import PendingInvitaionListItem from "./PendingInvitaionListItem";

const DUMMY_INVITATIONS = [
{
  _id : '1',
  senderId : {
    username: 'Mark',
    mail:'mark@hh.co'
  }
},
{
  _id : '2',
  senderId : {
    username: 'John',
    mail:'john@jj.ce'
  }
}
];

const MainContainer=styled('div')({
    width:'100%',
    height:'22%',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    overflow:'auto'
})

const PendingInvitationsList = () => {
  return (
    <MainContainer>
{
  DUMMY_INVITATIONS.map(invitaion =>(
    <PendingInvitaionListItem 
  key={invitaion._id}
  id={invitaion._id}
  username={invitaion.senderId.username}
  mail={invitaion.senderId.mail}
    />
  ))
}
    </MainContainer>
  )
}

export default PendingInvitationsList