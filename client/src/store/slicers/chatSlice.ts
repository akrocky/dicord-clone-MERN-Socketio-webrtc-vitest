
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'




const initialState= {
   choosenChatDetails:null,
   chatType:null,
   messages:[]
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
   
    setChoosenChatDetails: (state, action: PayloadAction) => {
    
   
      state.choosenChatDetails= action.payload.choosenChatDetails;
      state.chatType= action.payload.chatType;
      state.messages=[];
      },
    setChatMessages: (state, action: PayloadAction) => {
  
    
      state.messages= action.payload.messages;
      
      },
 
  },
})

// Action creators are generated for each case reducer function
 export const {  setChoosenChatDetails,setChatMessages} = chatSlice.actions
 export const selectChat = (state: RootState) => state.chat;
 export const selectState=(state: RootState) => state;
export default chatSlice.reducer;