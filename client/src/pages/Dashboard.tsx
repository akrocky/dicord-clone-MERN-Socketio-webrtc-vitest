import { styled } from "@mui/material"
import { SIdeBar } from "../components/dashobard/SideBar/SideBar"
import FriendsSideBAr from "../components/dashobard/FriendSideBar/FriendsSideBAr"
import { Messenger } from "../components/dashobard/Messenger/Messenger"
import AppBar from "../components/dashobard/AppBar/AppBar"
import { useEffect } from "react"
import { logout } from "../functions/authUtils"
import { useAppDispatch } from "../hooks/useStore"
import { setUserDetails } from "../store/slicers/auth/authSlice"
import { connect } from "react-redux"
import { connectWithSocketServer } from "../functions/realtimeCommunication/SocketConnection"

const Wrapper= styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex'
})
const Dashboard = () => {
  const dispatch= useAppDispatch()
  useEffect(() => {
   const userDetails= localStorage.getItem('user');
   if (!userDetails) {
   logout();
   }else{
    dispatch(setUserDetails(JSON.parse(userDetails)));
    connectWithSocketServer(JSON.parse(userDetails));
   }
    
  }, [])
  
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