import { Typography, CardContent, Card, Box, Grid, Chip, Button, Slider } from '@mui/material';

import ApplicationCard from './applicationCard/ApplicationCard';
import { DisabledSliderField } from '../forms/formFields/SliderField';
import InterviewCard from './interviewCard/InterviewCard';
import OfferCard from './offerCard/OfferCard';
import RejectionCard from './rejectionCard/RejectionCard';

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
    workingModel,
    businessModel,
    id,
    location,
    salaryExpectation,
    hiringManager,
    recruiterLinkedIn,
    vacancyPriority,
    vacancyDescription,
    companyName,
    coverLeterRecruiterMessage,
    currentStageId,
    currentStage,
    stages,
    date
  } = props;

  const renderCardContent = (stageType) => {
    switch(stageType) {
      case 'Application':
        return <ApplicationCard {...currentStage} />
      // case 'Interview':
      //   return <InterviewCard {...currentStage} />
      // case 'Offer': 
      //   return <OfferCard {...currentStage} />
      // case 'Rejection':
      //   return <RejectionCard {...currentStage} />
      default: 
        return <Box>Card Not Found</Box>
    }
  }

  return (
    <Box>
      <StyledCard>
        <CardContent>
          <Grid sx={{borderBottom: '1px solid', borderColor: 'primary.main', pb: 1, alignItems: 'space-between'}} container alignItems="start" justifyContent={'space-between'}>
            <Grid item xs={12} sm={9} xl={7}>
              <Typography component={'div'} variant="vacancyName">{vacancyName}</Typography>
              <Typography fontStyle={'italic'}>{companyName}</Typography>
              <Typography fontSize={'150%'}>{location}</Typography>
            </Grid>
            <Grid item textAlign={'end'} sm={12} xs={12} xl={5}>
              {currentStage && <Typography variant='stageType'>{currentStage.stageType}</Typography>}
              <DisabledSliderField value={vacancyPriority}/>
              <Typography>Created {date.slice(0, 10)}</Typography>
            </Grid>
          </Grid> 
          <Grid container>
            <Grid item xs={12} sm={12} xl={12}>
              <Typography component={'span'} mr={1}>Hiring Manager</Typography>
              <StyledChip component={'div'} label={hiringManager}pt={1}/>
            </Grid>
            <Grid display="flex" alignItems="center" item xs={12} sm={12} xl={12}>
                <Typography mr={1}>Salary Expectation</Typography>
                <Typography component={'span'} variant="salaryExpectation">{salaryExpectation}$</Typography>
              </Grid>
            <Grid container spacing={3}>
              <Grid display="flex" alignItems="center" item xs={12} sm={6} xl={6}>
                <Typography mr={1}>Business Model</Typography>
                <Typography component={'span'} variant="salaryExpectation">{businessModel}</Typography>
              </Grid>
              <Grid display="flex" alignItems="center" item xs={12} sm={6} xl={6}>
                <Typography mr={1}>Working Model</Typography>
                <Typography component={'span'} variant="salaryExpectation">{workingModel}</Typography>
              </Grid>
            </Grid>
            
            <Grid mt={1} item xs={12} sm={12} xl={12}>
              <Typography>Description</Typography>
              <Typography fontFamily={'Lora'}>{vacancyDescription}</Typography>
            </Grid>
          </Grid>
          {
            currentStage 
            ? 
            <Grid container display="flex" alignItems="center">
            <Grid item xs={12} sm={12} xl={'auto'}>
              <Typography mr={1}>Current Stage Name</Typography>
            </Grid>
            <Grid item xs={12} sm={12} xl={'auto'}>
              <StageControl id={id}/>
            </Grid>
          </Grid>
          : <Button>Add New Stage</Button>
          }
          {/* {renderCardContent(currentStage.stageType)} */}
        </CardContent>
      </StyledCard>
    </Box>
    
  )
}

export default VacancyCard