import InputField from "../../formFields/InputField";
import ToggleField from "../../formFields/ToggleField";
import DatePickerField from "../../formFields/DatePickerField";
import stageFormModel from "../formModel/stageFormModel";
import { Box, Grid, Typography } from "@mui/material";

const OfferForm = () => {
  const {
    formField: {
      employmentType,
      jobStartDate,
      proposedCompensation,
      jobBenefits,
      notes,
    }
  } = stageFormModel;

  const emplaymentTypes = [
    'part-time',
    'full-time',
    'casuals',
    'other'
  ];

  return (
    <Box>
     <Grid container spacing={3}>
      <Grid item xs={12} sm={12} xl={12}>
        <Typography variant="h5">Job Offer</Typography>
      </Grid>
      <Grid item xs={12} sm={6} xl={6}>
        <DatePickerField name={jobStartDate.name} label={jobStartDate.label}/>
      </Grid>
      <Grid item xs={12} sm={12} xl={6}>
        <InputField name={proposedCompensation.name} label={proposedCompensation.label}/>
      </Grid>
      <Grid item xs={12} sm={12} xl={12}>
        <ToggleField 
          data={emplaymentTypes} 
          name={employmentType.name} 
          label={employmentType.label}
        />
      </Grid>
      <Grid item xs={12} sm={12} xl={6}>
        <InputField name={jobBenefits.name} label={jobBenefits.label}/>
      </Grid>
      <Grid item xs={12} sm={12} xl={6}>
        <InputField name={notes.name} label={notes.label}/>
      </Grid>
     </Grid>
    </Box>
  )
}

export default OfferForm