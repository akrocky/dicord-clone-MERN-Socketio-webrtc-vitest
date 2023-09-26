import { setLocalstream } from "../../store/slicers/roomSlice";
import { store } from "../../store/store";

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

}