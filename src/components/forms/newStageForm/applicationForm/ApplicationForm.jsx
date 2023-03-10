import InputField from "../../formFields/InputField";
import DatePickerField from "../../formFields/DatePickerField";
import ToggleField from "../../formFields/ToggleField";
import { Box, Grid, Typography } from "@mui/material";
import stageFormModel from "../formModel/stageFormModel";

const ApplicationForm = () => {
  const emplaymentTypes = [
    'part-time',
    'full-time',
    'casuals',
    'other'
  ];

  const {
    formField: {
      jobDescription,
      employmentType,
      jobApplicationCoverLeter,
      jobStartDate,
      proposedCompensation,
      jobBenefits,
    }
  } = stageFormModel;
  return (
    <Box>
     <Grid container spacing={3}>
      <Grid item xs={12} sm={12} xl={12}>
        <Typography variant="h5">Job Application</Typography>
      </Grid>
      <Grid item xs={12} sm={6} xl={6}>
        <InputField multiline name={jobDescription.name} label={jobDescription.label}/>
      </Grid>
      <Grid item xs={12} sm={6} xl={6}>
        <DatePickerField name={jobStartDate.name} label={jobStartDate.label}/>
      </Grid>
      <Grid item xs={12} sm={12} xl={12}>
        <ToggleField 
          data={emplaymentTypes} 
          name={employmentType.name} 
          label={employmentType.label}
        />
      </Grid>
      <Grid item xs={12} sm={12} xl={6}>
        <InputField name={proposedCompensation.name} label={proposedCompensation.label}/>
      </Grid>
      <Grid item xs={12} sm={12} xl={6}>
        <InputField name={jobBenefits.name} label={jobBenefits.label}/>
      </Grid>
      <Grid item xs={12} sm={12} xl={12}>
        <InputField multiline name={jobApplicationCoverLeter.name} label={jobApplicationCoverLeter.label}/>
      </Grid>
     </Grid>
    </Box>
  )
}

export default ApplicationForm