import './VacancyCardApplication.scss';
import StageControl from '../stageControl/StageControl';
import { Grow, Typography, CardContent, Card } from '@mui/material';
import { useState, useEffect } from 'react';

const VacancyCardApplication = (props) => {
  const {
    vacancyName,
    id,
    companyName,
    location,
    salaryExpectation,
    coverLeterRecruiterMessage
  } = props;
  const [checked, setChecked] = useState(false)
  useEffect(() => {
    setChecked(true)
  }, [])
  return (
    <Grow 
    appear={true}
      in={checked}
    >
      <Card raised={true} sx={{ backgroundColor: 'primary.light' }} variant="outlined">
        <CardContent spacing={10}>
          <Typography py={1} pb={0} component={'div'} variant='vacancyName'>{vacancyName}</Typography>
          <Typography py={1} pt={0} component={'div'} variant='vacancyCompany'>{companyName}, {location}</Typography>
          <Typography py={1} component={'div'} variant='vacancySallary'>Applied Salary: {salaryExpectation}$</Typography>
          <StageControl id={id}/>
          <Typography py={1} pb={0} component={'div'} variant='vacancyCoverLeter'>Cover Leter</Typography>
          <Typography py={1} pt={0} component={'div'} style={{ wordWrap: "break-word" }}>{coverLeterRecruiterMessage}</Typography>
        </CardContent>
      </Card>
    </Grow>
    
  )
}

export default VacancyCardApplication