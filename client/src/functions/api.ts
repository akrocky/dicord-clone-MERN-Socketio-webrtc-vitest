import { Logout } from "@mui/icons-material";
import axios from "axios";
import { logout } from "./authUtils";



const apiClient= axios.create({
    baseURL:'http://localhost:5000',
    timeout:1000
})
apiClient.interceptors.request.use((config)=>{
    const userDetails=localStorage.getItem("user");
    if (userDetails) {
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization=`Bearer ${token}`
    }
    return config;
},(err)=>{
    return Promise.reject(err);
}
)
export const registerApi = async(data)=>{
    try {

        return await apiClient.post('/api/auth/register',data)
    } catch (error ) {
        if ( error instanceof(Error)) {
            return {
              error:true,
              exception: error
            }
        }

    
    }
}

export const loginApi = async(data)=>{
  
    try {

        return await apiClient.post('/api/auth/login',data)
    } catch (error ) {
        if ( error instanceof(Error)) {
            return {
              error:true,
              exception: error
            }
        }

    
    }
};
export const sendFriendInvitaion = async(data)=>{

    try {
        return await apiClient.post("/api/friend-invitation/invite",data)
        
    } catch (exception){
        checkResponseCode(exception);
        return {
            error: true,
            exception
        }
    }

}
export const acceptFriendInvitaionAPi = async(data)=>{

    try {
        return await apiClient.post("/api/friend-invitation/accept",data)
        
    } catch (exception){
        checkResponseCode(exception);
        return {
            error: true,
            exception
        }
    }

}
export const rejectFriendInvitaionApi = async(data)=>{

    try {
        return await apiClient.post("/api/friend-invitation/reject",data)
        
    } catch (exception){
        checkResponseCode(exception);
        return {
            error: true,
            exception
        }
    }

}


const checkResponseCode=(exception)=>{
    const responseCode= exception.response.status;
    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
}

