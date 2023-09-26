import { styled } from "@mui/material"
import FriendListItem from "./FriendListItem"
import { useAppSelector } from "../../../hooks/useStore"
import { selectFriend } from "../../../store/slicers/friendSlice"



const MainContainer=styled('div')({
    flexGrow:1,
    width:'100%'
})

const FriendsList = () => {
  const friendSlice= useAppSelector(selectFriend);
 

   const checkOnlineUsers=(friends,onlineUsers)=>{
   const friendsWithIsonline=[];
     friends.forEach((f)=>{
     
      const isUserOnline= onlineUsers.find((user) => user.userId.toString() == f.id.toString());


     
   const isOnline= isUserOnline ? true : false ;
   friendsWithIsonline.push({...f,isOnline})

      
      
     });
     return friendsWithIsonline;
   }
  return (
    <MainContainer>
        {
   friendSlice.firends.length > 0 &&      checkOnlineUsers(friendSlice.firends,friendSlice.onlineUsers).map(f=>(
            <FriendListItem
            key={f.id}
            id={f.id}
            username={f.username}
            isOnline={f.isOnline}
            />
          ))
        }
    </MainContainer>
  )
}

export default FriendsList