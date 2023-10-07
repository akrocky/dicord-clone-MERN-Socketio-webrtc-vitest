/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { setActiveRooms, setIsUserJoinedWithOnlyWithAudio, setLocalstream, setOpenRoom, setRemoteStreams, setRoomDetails } from "../../store/slicers/roomSlice"
import { store } from "../../store/store";
import * as socketConnection from "./SocketConnection";
import * as webrtcHandler from "./webrtcHandler"
export const createNewRoom= ()=>{
    const successCallBackFunc=()=>{
        socketConnection.createNewRoom();
        store.dispatch(setOpenRoom({isUserRoomCreator:true,isUserInRoom:true}));
        const onlyAudio= store.getState().room.audioOnly;
        store.dispatch(setIsUserJoinedWithOnlyWithAudio({isUserJoinedWithOnlyWithAudio:onlyAudio}));
    }
    const audioOnly=store.getState().room.audioOnly;

 webrtcHandler.getLocalStreamPreview(audioOnly,successCallBackFunc)

};


export  const newRoomCreated=(data)=>{
   const {roomDetails}=data;
   store.dispatch(setRoomDetails({roomDetails})) 
};

export const updateActiveRooms=(data)=>{
    const {activeRooms}=data;
    const friends= store.getState().friend.firends;

   
    const rooms=[];
    const userId=store.getState().auth?.id;
    activeRooms.forEach(room => {
        const isRoomCreatedByMe= room.roomCreator.userId === userId;
        if (isRoomCreatedByMe) {
            rooms.push({...room,creatorUsername: "Me"})
        }
        friends.forEach(f=>{
          
            if (f.id === room.roomCreator.userId ) {
                rooms.push({...room,creatorUsername: f.username})
            }
        });
    });
    console.log(rooms);
    store.dispatch(setActiveRooms({activeRooms:rooms})) 
};

export const joinRoomHandler=(roomId)=>{
    const roomDetails={roomId}
    const successCallBackFunc=()=>{
        store.dispatch(setRoomDetails({roomDetails}));
    store.dispatch(setOpenRoom({isUserRoomCreator:false,isUserInRoom:true}));
    const onlyAudio= store.getState().room.audioOnly;
        store.dispatch(setIsUserJoinedWithOnlyWithAudio({isUserJoinedWithOnlyWithAudio:onlyAudio}));
    socketConnection.joinRoom({roomId})
    }
    const audioOnly=store.getState().room.audioOnly;

 webrtcHandler.getLocalStreamPreview(audioOnly,successCallBackFunc)
};

export const leaveRoomHandler= ()=>{
    const roomId=store.getState().room.roomDetails.roomId;
    const localStream= store.getState().room.localStream;
    const screenSharingStream= store.getState().room.screenSharingStream;
    screenSharingStream.getTracks().forEach((t)=> t.stop());
    if (localStream) {
        localStream.getTracks().forEach(track=> track.stop());
        store.dispatch(setLocalstream({localStream:null}))
    }
    if (screenSharingStream) {
        screenSharingStream.getTracks().forEach((t)=> t.stop());
        store.dispatch(setShareScreenStream({screenSharingStream:null,isSreenSharingActive:false}));
    }
    store.dispatch(setRemoteStreams({remoteStreams:null}));
    webrtcHandler.closeAllConnections();
    socketConnection.leaveRoom(roomId);
    store.dispatch(setRoomDetails({roomDetails:null}));
    store.dispatch(setOpenRoom({isUserRoomCreator:false,isUserInRoom:false}));
}