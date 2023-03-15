import { Grid, IconButton, Box, Typography, Chip, Button } from "@mui/material";
import { useNavigate } from "react-router";
import ApplicationCard from '../applicationCard/ApplicationCard';
import InterviewCard from '../interviewCard/InterviewCard';
import OfferCard from '../offerCard/OfferCard';
import RejectionCard from '../rejectionCard/RejectionCard';
import StageControl from '../../stageControl/StageControl';
import { Close } from '@mui/icons-material';

const CardDetailed = (props) => {
  const {
    id,
    vacancyName,
    workingModel,
    businessModel,
    location,
    salaryExpectation,
    hiringManager,
    vacancyDescription,
    companyName,
    currentStageId,
    stages,
  } = props.vacancy;

  const { setSelectedCardId, getCurrentStageById } = props;

  const currentStage = getCurrentStageById(stages, currentStageId);
  const { stageType } = Object(currentStage);
  const navigate = useNavigate()

  const renderCardContent = (stageType) => {
    switch(stageType) {
      case 'Application':
        return <ApplicationCard {...currentStage} />
      case 'Interview':
        return <InterviewCard {...currentStage} />
      case 'Offer': 
        return <OfferCard {...currentStage} />
      case 'Rejection':
        return <RejectionCard {...currentStage} />
      default: 
        return null
    }
  }

  return (
    <Grid
      container
      sx={(theme) => ({
        position: 'sticky',
        overflow: 'auto',
        maxHeight: '93vh',
        top: theme.spacing(3),
        transition: 'all .2s',
        p: '2em',
        mt: '-2px',
        border: '2px solid #D8D8D8',
      })}
    >
      <Grid 
        container
        item xs={12} sm={12} xl={12} 
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Grid item>
          <Typography variant="vacancyName">{vacancyName} </Typography>
          <Typography variant='companyName'>{companyName},</Typography>
          <Typography variant='location'> {location}</Typography>
          <Typography variant="salaryExpectation"> {salaryExpectation}$</Typography>
        </Grid>
        <Grid item >
          <IconButton size="large" onClick={() => setSelectedCardId(null)}>
            <Close />
          </IconButton>
        </Grid>  
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography component={'span'} mr={1}>Hiring Manager</Typography>
        <Chip component={'div'} label={hiringManager}pt={1}/>
      </Grid>
      {
        currentStage 
          ? 
            <Grid container display="flex" alignItems="center">
              <Grid item xs={12} sm={12} xl={'auto'}>
                <Typography mr={1}>Current Stage Name</Typography>
              </Grid>
              <Grid item xs={12} sm={12} xl={'auto'}>
                <StageControl vacancy={props.vacancy}/>
              </Grid>
            </Grid>
          : <Button 
              fullWidth 
              variant="outlined"
              onClick={() => navigate(`newStage/${id}`)}
            >
              Add New Stage
            </Button>
      } 
      {renderCardContent(stageType)}
    </Grid>
  )
}

export default CardDetailed