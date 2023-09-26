import {  Button, Typography } from "@mui/material"
import Avatar from "../../shared/Avatar"
import OnlineIndicator from "./OnlineIndicator"
import { useAppDispatch } from "../../../hooks/useStore"
import { setChoosenChatDetails } from "../../../store/slicers/chatSlice"


const FriendListItem = ({id,username,isOnline}) => {
const dispatch=useAppDispatch();
  const handleChooseActiveConversation=()=>{
    const choosenChatDetails={id:id,name:username};
    const chatType="Direct"
   dispatch(setChoosenChatDetails({choosenChatDetails,chatType}))
  }
  return (
    <Button
    onClick={handleChooseActiveConversation}
    style={{
        width:'100%',
        height:'42px',
        marginTop:'10px',
        display:'flex',
        alignItems:'center',
        justifyContent:'flex-start',
        textTransform:'none',
        color:'black',
        position: 'relative'
    }}>
     <Avatar username={username} large={undefined} />
     <Typography
     style={{marginLeft: '7px',
         fontWeight:700,
         color: '#8e9297'
     }}
     variant="subtitle1"
     align="left">
        {username}
     </Typography>
     { isOnline && <OnlineIndicator/>}
    </Button>
  )
}

export default FriendListItem