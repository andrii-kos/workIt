import { Grid, Typography, Box } from "@mui/material";

const ApplicationCard = (props) => {
  const { 
    date, 
    stageType,
    employmentType,
    proposedCompensation,
    jobBenefits,
    jobApplicationCoverLeter,
    jobApplicationNotes

  } = props;
  return (
    <Grid mt={2} pt={1} borderTop="1px solid red" container item >
      <Grid item xs={12} sm={12} xl={12}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Proposed Compensation {proposedCompensation}</Typography>
          <Typography>Stage Type {stageType}</Typography>
        </Box>
        <Typography>Emplayment Type {employmentType}</Typography>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>  
        <Typography>Cover Leter</Typography>
        <Typography>{jobApplicationCoverLeter}</Typography>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>  
        <Typography>Job Benefits</Typography>
        <Typography>{jobBenefits}</Typography>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>  
        <Typography>Applied:</Typography>
        <Typography>{date.slice(0, 16).replace('T', ' ')}</Typography>
      </Grid>
      {jobApplicationNotes && 
        <Grid mt={1} item xs={12} sm={12} xl={12}>  
          <Typography>Notes</Typography>
          <Typography>{jobApplicationNotes}</Typography>
        </Grid>}
    </Grid>
  )
}

export default ApplicationCard