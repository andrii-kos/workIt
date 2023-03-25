import { Typography, Grid, Chip } from '@mui/material';
import CardMenu from '../cardMenu/CardMenu';

const VacancyCardItem = (props) => {
  const { stages, vacancy, setSelectedCardId, selectedCardId, currentStage} = props;
  const {
    vacancyName,
    workingModel,
    businessModel,
    id,
    location,
    salaryExpectation,
    hiringManager,
    vacancyDescription,
    companyName,
    date
  } = vacancy;
  return (
    <Grid
      container
      sx={(theme) => ({
        listStylePosition: 'inside',
        position: id !== selectedCardId ? 'static' : 'relative',
        zIndex: id === selectedCardId ? '1' : '-1',
        transition: 'all .1s',
        padding: '1.5em',
        mt: '-2px',
        border: id === selectedCardId ? '2px solid #23B5D3' : '2px solid #D8D8D8',
        cursor: 'pointer',
        "&:hover": {
          boxShadow: theme.shadows[2]
          }
      })}
      onClick={() => setSelectedCardId(id)}
    >
      <Grid container justifyContent="space-between" item xs={12} sm={12} xl={12}>
        <Grid item>
          <Typography variant="vacancyName">{vacancyName} </Typography>
          <Typography variant='companyName'>{companyName},</Typography>
          <Typography variant='location'> {location}</Typography>
          <Typography variant="salaryExpectation"> {salaryExpectation}$</Typography>
        </Grid>
        <CardMenu vacancy={vacancy} stages={stages} />
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography component={'span'} mr={1}>Hiring Manager</Typography>
        <Chip component={'div'} label={hiringManager}pt={1}/>
      </Grid>
      <Grid mt={1} item xs={12} sm={12} xl={12}>
        <Typography>Description</Typography>
        <Typography variant="description">{vacancyDescription}</Typography>
      </Grid>
      <Grid mt={1} container item xs={12} sm={12} xl={12}>
        {businessModel && 
        <Grid item>
          <Typography component="span">Business Model: </Typography>
          <Typography variant="highlightedText">{businessModel}</Typography>
        </Grid>}
        {workingModel &&
          <Grid item>
          <Typography component="span">Working Model: </Typography>
          <Typography variant="highlightedText">{workingModel}</Typography>
        </Grid>}
      </Grid>
      <Grid mt={1} item sm={12} xs={12} xl={12} display="flex" justifyContent="space-between">
        {
          currentStage && 
            <Typography component="div">
              Last Stage Type: <Typography component="span" variant='stageType'>
              {currentStage.stageType}
              </Typography>
            </Typography>
        }
        <Typography component="div">Created {date.slice(0, 10)}</Typography>
      </Grid>
    </Grid> 
  )
};

export default VacancyCardItem