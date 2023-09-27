/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// Use secureRandom here to generate random numbers

// Create your SimplePeer instance after using secureRandom

// import SimplePeer from 'simple-peer';


import { setLocalstream } from "../../store/slicers/roomSlice";
import { store } from "../../store/store";

import { signalPeerData } from "./SocketConnection";

console.log("peer");
console.log(SimplePeer);
console.log(SimplePeer.WEBRTC_SUPPORT);
const getConfiguration=()=>{
    const turnIceServers=null;
    if (turnIceServers) {
        // TODO use turn server credentials  
    }else{
        console.warn('Using only STUN server');
        return {
            iceServers: [
                { urls: 'stun:stun.l.google.com:19302' }
            ] 
            }
        }
    }

    const onlyAudioConstraints={
    audio:true,
    video: false
};
const defaultConstraints={
    audio:true,
    video: true
}



export const getLocalStreamPreview=(audioOnly=false, callbackFunc)=>{

    const constrains= audioOnly ? onlyAudioConstraints : defaultConstraints;
    navigator.mediaDevices.getUserMedia(constrains).then((stream)=>{
       store.dispatch(setLocalstream({localStream:stream})) ;
       callbackFunc();
    }).catch(err=>{
        console.log(err);
        console.log('Cannot get an access to a local strream');
    });

};
const peers= {};

export const prepareNewPeerConnection=(connUserSocketId,isIntiator )=>{
    console.log(connUserSocketId);
    console.log(isIntiator);
    let localStream: MediaStream= store.getState().room.localStream as unknown as MediaStream;
    console.log(localStream);
    if (isIntiator) {
        console.log('prepareing new peer connection as initiator');
    }else{
        console.log('prepareing new peer connection as non- initiator');
    }

 
   
        try {
      const     peer = new SimplePeer({
              initiator: isIntiator,
              config: getConfiguration(),
              stream: localStream
            });
            // Continue with peer connection setup
        
    peers[connUserSocketId]=peer;
    console.log("peer");
    console.log(peers);
    peers[connUserSocketId].on('signal',data=>{
        const signalData={
           signal:data ,
           connUserSocketId:connUserSocketId
        }
          // pass sinaling data to other user
        signalPeerData(signalData);


     
    });
       // stream
       peers[connUserSocketId].on("stream",(remoteStream)=>{
        // TODo
        // add new remote steream to our server store 
        console.log("remote stream came from other users");
        console.log("direc connection has been stablish");
      });
      peers[connUserSocketId].on('error', (error) => {
        console.error('SimplePeer error:', error);
      });
    } catch (error) {
        console.error("Error creating SimplePeer instance:", error);
      }
};

export const handleSingalingData=(data)=>{
const {signal,connUserSocketId}=data;
if (peers[connUserSocketId]) {
    peers[connUserSocketId].signal(signal);
}

};