import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { useAppDispatch, useAppSelector } from '../hooks/useStore';
import { removeAlertDetails, selectAlert } from '../store/slicers/alertSlice';
const AlertNotification = () => {
  const alertDetails= useAppSelector(selectAlert)
  const dispatch= useAppDispatch();
const closeAlert=()=>{
    dispatch(removeAlertDetails())
}
  return (
    <Snackbar
  anchorOrigin={{ vertical:"bottom", horizontal:"center" }}
  key="bottom-center"
  open={alertDetails.open}
  onClose={closeAlert}
 autoHideDuration={6000}
>
    <Alert severity="error">
     {alertDetails.message}
    </Alert>
</Snackbar>
  )
}

export default AlertNotification