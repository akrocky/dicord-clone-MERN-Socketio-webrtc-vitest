
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'




const initialState= {
   isUserInRoom: false,
   isUserRoomCreator: false,
   roomDetails: null,
   activeRooms: [],
   localStream: null,
   remoteStreams:[],
   audioOnly: false,
   screenSharingStream: null,
   isSreenSharingActive: false,
   isUserJoinedWithOnlyWithAudio: false,
}

export const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
   
    setOpenRoom: (state, action: PayloadAction) => {
    state.isUserRoomCreator=action.payload.isUserRoomCreator;
    state.isUserInRoom=action.payload.isUserInRoom;

      },
    setRoomDetails: (state, action: PayloadAction) => {
    state.roomDetails=action.payload.roomDetails;

      },
    setActiveRooms: (state, action: PayloadAction) => {
    
state.activeRooms=action.payload.activeRooms;
      },
    setLocalstream: (state, action: PayloadAction) => {
      state.localStream=action.payload.localStream;

      },
    setRemoteStreams: (state, action: PayloadAction) => {
    
state.remoteStreams=action.payload.remoteStreams
      },
    setAudioOnly: (state, action: PayloadAction) => {
    
state.audioOnly=action.payload.audioOnly
      },
    setShareScreenStream: (state, action: PayloadAction) => {
    
state.screenSharingStream= action.payload.screenSharingStream;
state.isSreenSharingActive= action.payload.isSreenSharingActive;
      },
    setIsUserJoinedWithOnlyWithAudio: (state, action: PayloadAction) => {
    
state.isUserJoinedWithOnlyWithAudio= action.payload.isUserJoinedWithOnlyWithAudio;

      },
   
 
  },
})

// Action creators are generated for each case reducer function
 export const {setOpenRoom, setActiveRooms,setRoomDetails,setLocalstream,setRemoteStreams,setShareScreenStream,setAudioOnly ,setIsUserJoinedWithOnlyWithAudio } = roomSlice.actions
 export const selectRoom= (state: RootState) => state.room;
 export const selectState=(state: RootState) => state;
export default roomSlice.reducer;