
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface friendState <Type>{
 
    firends: Array<Type>,
    pendingFriendsInvitations:Array<Type>,
    onlineUsers:Array<Type>,
}




const initialState: friendState<NonNullable<unknown>> = {
    firends:[],
    pendingFriendsInvitations:[],
    onlineUsers:[],
}

export const friendSlice = createSlice({
  name: 'friend',
  initialState,
  reducers: {
   
    setFriends: (state, action: PayloadAction<friendState>) => {
    
      state.firends= action.payload.friends;
    
      },
    setPendingInvitation: (state, action: PayloadAction) => {
     
    
       state.pendingFriendsInvitations= action.payload.pendingFriendsInvitations;
    
      },
     
      setRejectFriendInvitaion: (state, action: PayloadAction)=>{

      },
    setOnlineUsers: (state, action: PayloadAction) => {
    
      state.onlineUsers= action.payload.onlineUsers;
  
      },
 
  },
})

// Action creators are generated for each case reducer function
 export const {  setFriends,setPendingInvitation,setOnlineUsers,setAcceptFriendInvitaion,setRejectFriendInvitaion} = friendSlice.actions
 export const selectFriend = (state: RootState) => state.friend;
export default friendSlice.reducer;