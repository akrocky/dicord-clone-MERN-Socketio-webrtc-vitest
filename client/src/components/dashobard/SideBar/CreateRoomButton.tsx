import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import { createNewRoom } from '../../../functions/realtimeCommunication/roomHandler'
import { useAppSelector } from '../../../hooks/useStore'
import { selectRoom } from '../../../store/slicers/roomSlice'


const CreateRoomButton = () => {
  const {isUserInRoom}= useAppSelector(selectRoom)
    const CreateRoomHandler=()=>{
     
createNewRoom();
    }
  return (
    <Button
    disabled={isUserInRoom}
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