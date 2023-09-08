import { styled } from "@mui/material"
import FriendListItem from "./FriendListItem"

const Dummy_Frirend=[
  {
    id:1,
  username:'Mark',
  isOnline: true
},
{
  id:2,
username:'Jörg',
isOnline: false
},
{
  id:3,
username:'Anna',
isOnline: false
},
]

const MainContainer=styled('div')({
    flexGrow:1,
    width:'100%'
})

const FriendsList = () => {
  return (
    <MainContainer>
        {
          Dummy_Frirend.map(f=>(
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