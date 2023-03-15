import { Chip, Grid, Box, Typography } from "@mui/material";

const InterviewCard = (props) => {
  const {
    date,
    interviewType,
    interviewerNames,
    location,
    notes,
    questionsAndAnswers,
    stageType
   } = props;

  const renderQuestionsAndAnserts = (arr) => {
    return arr.map((elem, ind) => {
      return (
        <Box key={ind} px={2}>
          <Typography>Question: {elem.question}</Typography>
          <Typography>Answer: {elem.answer}</Typography>
        </Box>
      )
    }) 
  };

  const renderInterviewers = (arr) => {
    const withoutEmptyItems = arr.filter(elem => elem.length > 0)
    return withoutEmptyItems.map((elem, ind) => {
      return <Chip sx={{mr: 1}} label={elem} key={ind} />
    })
  }

  return (
    <Grid mt={2} pt={1} borderTop="1px solid red" container item >
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Box display="flex" justifyContent="space-between">
          <Typography>Interivew Type: {interviewType}</Typography>
          <Typography>Stage Type: {stageType}</Typography>
        </Box>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography>Location Of Interview: {location}</Typography>
      </Grid>
      <Grid 
        mt={1} 
        item xs={12} sm={12} xl={12} 
        sx={{
          display: 'flex', 
          alignItems: 'baseline',
        }}
      >  
        <Typography pr={1}>{interviewerNames.length > 1 ? 'Interviewers:' : 'Interviewer:'}</Typography>
        <Box>{renderInterviewers(interviewerNames)}</Box>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>  
        <Typography>Question And Answers</Typography>
        {
          questionsAndAnswers && 
            renderQuestionsAndAnserts(questionsAndAnswers)
          }
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

export default InterviewCard