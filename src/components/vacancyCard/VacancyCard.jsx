import { Typography, CardContent, Card, Box, Grid, Chip } from '@mui/material';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import StageControl from '../stageControl/StageControl';

const StyledCard = styled(Card)(
  ({theme}) => `
    background: ${theme.palette.primary.light};
    padding: 10px;
    font-family: Montserrat;
    box-shadow: ${theme.shadows[2]};
    &:hover {
      box-shadow: ${theme.shadows[6]};
    }
  `
);

const StyledChip = styled(Chip)(
  ({theme}) => `
  background-color: transparent;
  border: 1px solid ${theme.palette.primary.main};
  border-radius: 10px;
  font-style: italic;
  margin: .5em 0;
  `
)

const VacancyCard = (props) => {
  const {
    vacancyName,
    id,
    location,
    salaryExpectation,
    recruiterName,
    recruiterLinkedIn,
    vacancyDescription,
    companyName,
    coverLeterRecruiterMessage,
    currentStageId,
    currentStage,
    stages,
    date
  } = props;

  return (
    <Box>
      <StyledCard>
        <CardContent>
          <Grid container alignItems="start" justifyContent={'space-between'}>
            <Grid item xs={12} sm={'auto'} xl={9}>
              <Typography component={'div'} variant="vacancyName">{vacancyName}</Typography>
              <Typography fontStyle={'italic'}>{companyName}</Typography>
            </Grid>
            <Grid item xs={12} sm={'auto'} lg={'auto'}>
              <Typography>Active Stage</Typography>
              <Typography variant='stageType'>{currentStage.stageType}</Typography>
            </Grid>
          </Grid>
          <Grid container pt={1} alignItems="baseline" justifyContent={'space-between'}>
            <Grid xs={'auto'} sm={'auto'} xl={'auto'}>
              <Typography fontSize={'150%'}>{location}</Typography>
            </Grid>
            <Grid xs={'auto'} sm={'auto'} xl={'auto'}>
              <Typography>Created {date.slice(0, 10)}</Typography>
            </Grid>           
          </Grid>     
          <Grid item xs={12} sm={12} xl={12}>
            <Typography component={'span'} mr={1}>Hiring Manager</Typography>
            <StyledChip component={'div'} label={recruiterName}pt={1}/>
          </Grid>
          <Grid display="flex" alignItems="center" item xs={12} sm={12} xl={12}>
            <Typography mr={1}>Salary Expectation</Typography>
            <Typography component={'span'} variant="salaryExpectation">{salaryExpectation}$</Typography>
          </Grid>
          <Grid container display="flex" alignItems="center">
            <Grid item xs={12} sm={12} xl={'auto'}>
              <Typography mr={1}>Current Stage Name</Typography>
            </Grid>
            <Grid item xs={12} sm={12} xl={'auto'}>
              <StageControl id={id}/>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} xl={12}>
            <Typography>Description</Typography>
            <Typography fontFamily={'Lora'}>{vacancyDescription}</Typography>
          </Grid>
        </CardContent>
      </StyledCard>
    </Box>
    
  )
}

export default VacancyCard