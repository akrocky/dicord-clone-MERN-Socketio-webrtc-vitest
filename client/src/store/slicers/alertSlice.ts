
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface AlertState {
 
  message: string,
  open:boolean
  severity:string
}




const initialState: AlertState = {
    message: '',
    open: false,
    severity: ''
}

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
   
    setAlertDetails: (state, action: PayloadAction<AlertState>) => {
    
      state.message= action.payload.message;
      state.open= action.payload.open;
      state.severity= action.payload.severity;
      },
    removeAlertDetails: (state) => {
    
      state.message= "";
      state.open= false;
      },
 
  },
})

// Action creators are generated for each case reducer function
 export const {  setAlertDetails, removeAlertDetails} = alertSlice.actions
 export const selectAlert = (state: RootState) => state.alert
export default alertSlice.reducer;