import { Grid, Box, Typography } from "@mui/material";

const RejectionCard = (props) => {
  const {
    stageType,
    date,
    rejectionPersonName,
    rejectionReason,
    rejectionNotes
  } = props;
  return (
    <Grid mt={2} pt={1} borderTop="1px solid red" container item >
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Rejected By: {rejectionPersonName}</Typography>
          <Typography>Stage Type: {stageType}</Typography>
        </Box>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography>Rejection Reason {rejectionReason}</Typography>
      </Grid>
      {
        rejectionNotes && 
          <Grid mt={1} item xs={12} sm={12} xl={12}>  
            <Typography>Notes</Typography>
            <Typography>{rejectionNotes}</Typography>
          </Grid>
        }
      <Grid mt={1} item xs={12} sm={12} xl={12}>  
        <Typography>Rejected</Typography>
        <Typography>{date.slice(0, 16).replace('T', ' ')}</Typography>
      </Grid>
    </Grid>
  )
}

export default RejectionCard