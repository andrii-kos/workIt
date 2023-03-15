import { Box, Grid } from '@mui/material';
import VacancyCardItem from "../vacancyCard/vacancyCardItem/VacancyCardItem";
import CardDetailed from '../vacancyCard/cardDetailed/CardDetailed';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchVacancies } from './VacancySlice';

const VacanciesCards = () => {
  const dispatch = useDispatch();
  const vacancies = useSelector(state => state.vacancies.vacancies);
  const [ selectedCardId, setSelectedCardId ] = useState(null);

  useEffect(() => {
    dispatch(fetchVacancies());
  }, []);

  const getVacancyById = (vacancyList, id) => {
    return vacancyList.find(vacancy => vacancy.id === id)
  };

  const getCurrentStageById = (stages, id) => {
    return stages.find(elem => elem.id === id)
  }

  const renderCard = (props, id) => {
    const { currentStageId, stages } = props;
    return (
      <VacancyCardItem
        setSelectedCardId={setSelectedCardId}
        selectedCardId={selectedCardId}
        key={id} 
        {...props} 
        currentStage={getCurrentStageById(stages, currentStageId)} 
      />  
    )
  };

  const rendeCardsList = (vacancies) => {
    if (vacancies.length === 0 ) {
      return <p>There is no vacancies</p>
    }
    return vacancies.map(({...props}, id) => renderCard({...props}, id)
    )
  };
  
  const elements = rendeCardsList(vacancies);

  return (
    <Box py={10} px={20}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} xl={6}>
          {elements}
        </Grid>
        {selectedCardId && 
          <Grid item xs={12} sm={6} xl={6}>
            <CardDetailed 
              vacancy={getVacancyById(vacancies, selectedCardId)} 
              setSelectedCardId={setSelectedCardId}
              getCurrentStageById={getCurrentStageById} 
            />
          </Grid>}
      </Grid> 
    </Box>
    
  )
}

export default VacanciesCards