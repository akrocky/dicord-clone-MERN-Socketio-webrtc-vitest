
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'

export interface UserState {
 
  username: string,
  email:string,
  token:string
 
}




const initialState: UserState = {
  
    username: '',
  email:'',
  token:''
  
  
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
   
    setUserDetails: (state, action: PayloadAction<UserState>) => {
    
      state.username=action.payload.username
      state.token=action.payload.email
      state.token=action.payload.token
    },
 
  },
})

// Action creators are generated for each case reducer function
export const {  setUserDetails} = authSlice.actions
export const selectUser = (state: RootState) => state.auth
export default authSlice.reducer