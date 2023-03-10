import { Box, Typography, Grid } from "@mui/material"
import InputField from "..//../formFields/InputField";

const RejectionForm = () => {
  return (
    <Box>
      <Typography>Rejection Form</Typography>
      <Grid container>
        <Grid item >
          <InputField />
        </Grid>
      </Grid>
    </Box>
  )
}

export default RejectionForm