import InputField from '../../formFields/InputField';
import ToggleField from '../../formFields/ToggleField';
import DatePickerField from '../../formFields/DatePickerField';
import ArrayFieldNames from '../../formFields/ArrayFieldNames';
import ArrayFieldQA from '../../formFields/ArrayFieldQA';
import { Box, Grid } from '@mui/material';
import stageFormModel from '../formModel/stageFormModel';

const InterviewForm = () => {
  const {
    formField: {
      location,
      interviewType,
      interviewDate,
      interviewerNames, 
      notes
    }
  } = stageFormModel;
  
  const interviewTypes = ['HR', 'Technical', 'CEO'];

  return (
    <Box>
      <Grid container xl={12} spacing={3}>
        <Grid item xs={12} sm={12} xl={6}>
          <InputField name={location.name} label={location.label} />
        </Grid>
        <Grid item xs={12} sm={12} xl={6}>
         <DatePickerField name={interviewDate.name} label={interviewDate.label} />
        </Grid>
        <Grid item xs={12} sm={12} xl={12}>
          <ToggleField name={interviewType.name} label={interviewType.label} data={interviewTypes} />
        </Grid>
      </Grid>
      <ArrayFieldNames interviewerNames={interviewerNames} />
      <ArrayFieldQA />
      <Grid mt={5} xs={12} sm={12} item xl={12}>
        <InputField multiline name={notes.name} label={notes.label} />
      </Grid>
    </Box>
  )
}

export default InterviewForm