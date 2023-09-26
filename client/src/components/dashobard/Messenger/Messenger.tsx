import { styled } from "styled-components"
import { useAppSelector } from "../../../hooks/useStore";
import { selectChat } from "../../../store/slicers/chatSlice";
import MessengerContent from "./MessengerContent";
import WelcomeMessage from "./WelcomeMessage";

const MainContainer = styled('div')({
 flexGrow:1,
 backgroundColor:'#36393f',
 marginTop:"48px"
})

export const Messenger = () => {
  const  choosenChatDetails= useAppSelector(selectChat).choosenChatDetails;
  return (
    <MainContainer>
        {!choosenChatDetails ? <WelcomeMessage/> : <MessengerContent choosenChatDetails={choosenChatDetails}/>}
    </MainContainer>
  )
}
