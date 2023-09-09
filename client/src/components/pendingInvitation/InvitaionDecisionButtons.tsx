import { Check, Clear } from "@mui/icons-material"
import { Box, IconButton } from "@mui/material"


const InvitaionDecisionButtons = ({
    disabled,
    accecptInviationHandler,
    rejectInvitaionHandler
}) => {
  return (
    <Box sx={{display: 'flex'}}>
     <IconButton style={{color:'white'}} disabled={disabled} onClick={accecptInviationHandler}>
        <Check/>
     </IconButton>
     <IconButton style={{color:'white'}} disabled={disabled} onClick={rejectInvitaionHandler}>
        <Clear/>
     </IconButton>
    </Box>
  )
}

export default InvitaionDecisionButtons