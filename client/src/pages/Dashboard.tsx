import { styled } from "@mui/material"
import { SIdeBar } from "../components/dashobard/SideBar/SideBar"
import FriendsSideBAr from "../components/dashobard/FriendSideBar/FriendsSideBAr"
import { Messenger } from "../components/dashobard/Messenger/Messenger"
import AppBar from "../components/dashobard/AppBar/AppBar"
import { useEffect } from "react"
import { logout } from "../functions/authUtils"
import { useAppDispatch, useAppSelector } from "../hooks/useStore"
import { setUserDetails } from "../store/slicers/auth/authSlice"

import { connectWithSocketServer } from "../functions/realtimeCommunication/SocketConnection"
import { selectRoom } from "../store/slicers/roomSlice"
import Room from "../components/dashobard/Room/Room"

const Wrapper= styled('div')({
  width:'100%',
  height:'100vh',
  display:'flex'
})
const Dashboard = () => {
  const dispatch= useAppDispatch()
  const {isUserInRoom}= useAppSelector(selectRoom);

  useEffect(  () => {
   
    checkUserInLocalStorage();
    
  }, []);
  const checkUserInLocalStorage= async() =>{
    const userDetails= localStorage.getItem('user');
    if (!userDetails) {
      logout();
      }else{
     await  dispatch(setUserDetails(JSON.parse(userDetails)));
     await  connectWithSocketServer(JSON.parse(userDetails),dispatch );
      }
  } 
  return (
    <Wrapper>
     <SIdeBar/>
     <FriendsSideBAr/>
     <Messenger/>
     <AppBar/>
{isUserInRoom && <Room/> }
    </Wrapper>
  )
}

export default Dashboard