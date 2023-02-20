import './VacancyCardInterview.scss';

import { useState, useEffect } from 'react';
import StageControl from '../stageControl/StageControl';
import { Box, Grow, Typography, CardContent, Card } from '@mui/material';
import { useSelector } from 'react-redux';

const VacancyCardInterview = (props) => {
  const {
    vacancyName,
    id,
    companyName,
    location,
    currentStageId,
    stages
  } = props;

  const { questionAnswer } = stages.find(elem => elem.id === currentStageId);
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])

  const renderQuestionAnswer = (questionAnswer) => {
    if (questionAnswer !== undefined) {
      return questionAnswer.map((elem, ind) => {
        return (
          <Box key={ind}>
             <Typography><span>Question: </span>{elem[0]}</Typography>
             <Typography><span>Answer: </span>{elem[1]}</Typography>
          </Box>
        )
     })
    } else {
      return (
        <Typography>No Questions</Typography>
      )
    }
    
  };
  return (
    <Grow in={checked} >
      <Card sx={{ backgroundColor: 'primary.light' }} variant="outlined">
        <CardContent>
            <Typography py={1} pb={0} component={'div'} variant='vacancyName'>{vacancyName}</Typography>
            <Typography py={1} pt={0} component={'div'} variant='vacancyCompany'>{companyName}, {location}</Typography>
            <StageControl id={id}/>
            {/* {renderQuestionAnswer(questionAnswer)} */}
        </CardContent>
      </Card>
    </Grow>
    
  )
}

export default VacancyCardInterview