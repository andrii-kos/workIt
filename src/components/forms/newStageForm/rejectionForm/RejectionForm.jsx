import { Box, Typography, Grid } from "@mui/material"
import InputField from "..//../formFields/InputField";
import stageFormModel from '../formModel/stageFormModel';

const RejectionForm = () => {
  const {
    formField: {
      rejectionPersonName,
      rejectionReason,
      rejectionNotes
    }
  } = stageFormModel;
  return (
    <Box>
      <Typography>Rejection Form</Typography>
      <Grid spacing={3} container>
        <Grid item xs={12} sm={6} xl={6}>
          <InputField name={rejectionPersonName.name} label={rejectionPersonName.label} />
        </Grid>
        <Grid item xs={12} sm={6} xl={6}>
          <InputField name={rejectionReason.name} label={rejectionReason.label} />
        </Grid>
        <Grid item xs={12} sm={12} xl={12}>
          <InputField name={rejectionNotes.name} label={rejectionNotes.label} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default RejectionForm