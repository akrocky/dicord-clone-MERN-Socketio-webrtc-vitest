import { styled } from "@mui/material"
import { SIdeBar } from "../components/dashobard/SideBar/SideBar"
import FriendsSideBAr from "../components/dashobard/FriendSideBar/FriendsSideBAr"
import { Messenger } from "../components/dashobard/Messenger/Messenger"
import AppBar from "../components/dashobard/AppBar/AppBar"

const Wrapper= styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex'
})
const Dashboard = () => {
  return (
    <Wrapper>
     <SIdeBar/>
     <FriendsSideBAr/>
     <Messenger/>
     <AppBar/>

    </Wrapper>
  )
}

export default Dashboard