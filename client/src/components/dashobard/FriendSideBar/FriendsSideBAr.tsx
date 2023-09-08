
import { styled } from "styled-components"
import AddFriendButton from "./AddFriendButton"
import FriendsTitle from "./FriendsTitle"
import FriendsList from "./FriendsList"
import PendingInvitationsList from "./PendingInvitationsList"

const MainContainer = styled('div')({
  width:"224px",
  height:"100%",
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  backgroundColor:"#2F3136"
})

const FriendsSideBAr = () => {
  return (
   <MainContainer>
<AddFriendButton/>
<FriendsTitle title='Private Messages' />
<FriendsList />
<FriendsTitle title='invitation'/>

<PendingInvitationsList />

   </MainContainer>
  )
}

export default FriendsSideBAr