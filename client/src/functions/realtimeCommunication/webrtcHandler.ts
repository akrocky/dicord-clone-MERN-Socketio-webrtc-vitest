/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-unused-vars */

// Use secureRandom here to generate random numbers

// Create your SimplePeer instance after using secureRandom

// import SimplePeer from 'simple-peer';


import { setLocalstream, setRemoteStreams } from "../../store/slicers/roomSlice";
import { store } from "../../store/store";

import { signalPeerData } from "./SocketConnection";

console.log("peer");

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
   const localStream: MediaStream= store.getState().room.localStream as unknown as MediaStream;
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
        console.log(peer);
        console.log(peers);
    peers[connUserSocketId]=peer;
    console.log("peer");
    console.log(peers);
    peers[connUserSocketId].on('signal',data=>{
        const signalData={
           signal:data ,
           connUserSocketId:connUserSocketId
        }
        console.log("signalData");
    
          // pass sinaling data to other user
        signalPeerData(signalData);


     
    });
       // stream
       peers[connUserSocketId].on("stream",(remoteStream)=>{
        // TODo
        // add new remote steream to our server store 
        console.log("remote stream came from other users");
        console.log("direc connection has  been stablish");
         remoteStream.connUserSocketId=connUserSocketId;
        addNewRemoteStream(remoteStream);
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

const addNewRemoteStream=(remoteStream)=>{
const remoteStreams= store.getState().room.remoteStreams;
const newRemoteStreams= remoteStreams ? [...remoteStreams,remoteStream]: [remoteStream];
console.log(newRemoteStreams);
store.dispatch(setRemoteStreams({remoteStreams:newRemoteStreams}))

};


export const closeAllConnections=()=>{
Object.entries(peers).forEach((mappedObject)=>{
    const connUserSocketId= mappedObject[0];
    if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();
        delete peers[connUserSocketId];
    }
})

};

export const handleParticipantLeftRoom=(data)=>{
    const {connUserSocketId}=data;

    if (peers[connUserSocketId]) {
        peers[connUserSocketId].destroy();
        delete peers[connUserSocketId];
    }
    const remoteStreams=store.getState().room.remoteStreams;
    const newRemoteStreams= remoteStreams.filter((remoteStream)=>{

        return remoteStream.connUserSocketId !== connUserSocketId;
    });
    store.dispatch(setRemoteStreams({remoteStreams:newRemoteStreams}));
};

export const switchOutgoingTracks = (stream) => {
    console.log("switchOutgoingTracks");
    console.log("stram came");
    console.log("peers");
    console.log(peers);
  for (let socket_id in peers) {
    console.log("socket_ids");
    console.log(socket_id);
    console.log("peers[socket_id].streams[0].getTracks()");
    console.log(peers[socket_id].streams[0].getTracks());
    for (let index in peers[socket_id].streams[0].getTracks()) {
      for (let index2 in stream.getTracks()) {
        if (
          peers[socket_id].streams[0].getTracks()[index].kind ===
          stream.getTracks()[index2].kind
        ) {
          peers[socket_id].replaceTrack(
            peers[socket_id].streams[0].getTracks()[index],
            stream.getTracks()[index2],
            peers[socket_id].streams[0]
          );
          break;
        }
      }
    }
  }
};