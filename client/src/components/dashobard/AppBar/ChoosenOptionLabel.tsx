import { Typography } from "@mui/material"
import { useAppSelector } from "../../../hooks/useStore"
import { selectChat } from "../../../store/slicers/chatSlice"


const ChoosenOptionLabel = () => {

    const  name= useAppSelector(selectChat).choosenChatDetails?.name;
  return (
    <Typography
    sx={{
        fontSize:'16px',
        color:'white',
        fontWeight: 'bold'
    }}
    >  
       {name? `Choosen coversation: ${name}` : ''}

    </Typography>
  )
}

export default ChoosenOptionLabel