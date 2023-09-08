import * as Api from '../../functions/api';
import { setAlertDetails } from '../slicers/alertSlice';

import {  setUserDetails } from '../slicers/auth/authSlice';
import { AppDispatch } from '../store';


export const login =async (data:{
    username: string,
    email:string
   },dispatch:AppDispatch,navigate:(value:string)=> void)=>{

   
        const response= await Api.loginApi(data);
        if (response.error) {
            dispatch(setAlertDetails({message:response.exception.response.data,open:true,severity:"Error",}))
        } else {
            const userDetails=response.data;
          
            localStorage.setItem('user',JSON.stringify(userDetails));
             dispatch(setUserDetails(userDetails));
             navigate("/dashboard")
        }
    
}

export const register =async (userDetails:{
    username: string,
    mail:string,
    token:string
   },dispatch:AppDispatch,navigate:(value:string)=> void)=>{

   
        const response= await Api.registerApi(userDetails);
        if (response.error) {
            dispatch(setAlertDetails({message:response.exception.response.data,open:true,severity:"Error",}))
           
        } else {
            const userDetails=response.data;
          
            localStorage.setItem('user',JSON.stringify(userDetails));
             dispatch(setUserDetails(userDetails));
             navigate("/dashboard")
        }
    
}