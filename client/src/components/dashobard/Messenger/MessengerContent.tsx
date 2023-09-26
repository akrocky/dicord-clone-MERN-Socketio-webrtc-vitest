import { styled } from "@mui/material"
import { useEffect } from "react"
import Messages from "../Messages/Messages"
import NewMessageInput from "../Messages/NewMessageInput"
import { getDirectChatHistory } from "../../../functions/realtimeCommunication/SocketConnection"
import { useAppSelector } from "../../../hooks/useStore"
import { selectChat } from "../../../store/slicers/chatSlice"

const Wrapper=styled('div')({
    flexGrow:1,
   
    height: '100%'
   
})

const MessengerContent = ({choosenChatDetails}) => {
  const messages= useAppSelector(selectChat).messages;
    useEffect(() => {

getDirectChatHistory({
  reciverUserId: choosenChatDetails.id
});
    }, [choosenChatDetails])
    
  return (
    <Wrapper>
        <Messages choosenChatDetails={choosenChatDetails} messages={messages} />
        <NewMessageInput chosenChatDetails={choosenChatDetails}/>
    </Wrapper>
  )
}

export default MessengerContent