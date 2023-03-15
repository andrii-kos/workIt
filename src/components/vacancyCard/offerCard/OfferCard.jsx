import { Grid, Box, Typography } from "@mui/material";
 
const OfferCard = (props) => {
  const {
    date,
    employmentType,
    jobBenefits,
    jobStartDate,
    proposedCompensation,
    stageType,
    notes
  } = props;
  return (
    <Grid mt={2} pt={1} borderTop="1px solid red" container item >
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Employment Type: {employmentType}</Typography>
          <Typography>Stage Type: {stageType}</Typography>
        </Box>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography>Proposed Compensation: {proposedCompensation}</Typography>
        <Typography>Job Start Date: {jobStartDate.slice(0,10)}</Typography>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography>Job Benefits</Typography>
        <Typography>{jobBenefits}</Typography>
      </Grid>
      {
        notes && 
          <Grid mt={1} item xs={12} sm={12} xl={12}>  
            <Typography>Notes</Typography>
            <Typography>{notes}</Typography>
          </Grid>
        }
      <Grid mt={1} item xs={12} sm={12} xl={12}>  
        <Typography>Applied</Typography>
        <Typography>{date.slice(0, 16).replace('T', ' ')}</Typography>
      </Grid>
    </Grid>
  )
}

export default OfferCard