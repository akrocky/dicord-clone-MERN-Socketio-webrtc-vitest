import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { createNewRoom } from '../../../functions/realtimeCommunication/roomHandler'


const CreateRoomButton = () => {
    const CreateRoomHandler=()=>{
     
createNewRoom();
    }
  return (
    <Button
    style={{
        width:'48px',
        height:'48px',
        borderRadius:'16px',
        margin:0,
        padding:0,
        minWidth:0,
        marginTop:'10px',
        color:'white',
        backgroundColor:'#5865F2'
    }}
    onClick={CreateRoomHandler}>
        <Add/>
    </Button>
  )
}

export default CreateRoomButton