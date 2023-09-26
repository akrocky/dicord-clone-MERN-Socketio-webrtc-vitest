
import { setChatMessages } from "../store/slicers/chatSlice";
import { store } from "../store/store";

export const updateDirectChatHistoryIfActive=(data) =>{
       const {participants
        , messages}= data ;
    
       
       // find id of user from token and id from active conversation 
       const reciverId = store.getState().chat.choosenChatDetails?.id;
     
       const userId= store.getState().auth.id;

       if (reciverId && userId) {
        const userInConversation=[reciverId, userId];
        updateChatHistoryIFSameCOnversationActive({participants,userInConversation,messages})
        
       }
       
}

const  updateChatHistoryIFSameCOnversationActive=({participants,userInConversation,messages})=>{
const result= participants.every(function(participantId){
    return userInConversation.includes(participantId);
});
if (result) {
    
    store.dispatch(setChatMessages({messages}))
    
}

}