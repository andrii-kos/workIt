import { Alert, Box, Snackbar  } from "@mui/material"
import { useState, useEffect } from "react";

export default function AlertMessage({vacancyStatus}) {
  const {remove, update, post, fetch} = vacancyStatus;
  
  const [showAlert, setShowAlert] = useState()
  const handleAlertClose = () => {
    setShowAlert(false)
  }
  useEffect(() => {
    setShowAlert(remove === 'success')
  }, [vacancyStatus])
  console.log(showAlert)
  return (
    <Box>
      <Snackbar open={showAlert} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity='success'>
          Data submitted successfully!
        </Alert>
    </Snackbar>
    </Box>
    
  )
}