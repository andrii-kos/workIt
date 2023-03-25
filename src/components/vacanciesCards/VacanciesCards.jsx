import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSelector } from '@reduxjs/toolkit';

import VacancyCardItem from "../vacancyCard/vacancyCardItem/VacancyCardItem";
import DetailedCard from '../vacancyCard/detailedCard/DetailedCard';
import AlertMessage from '../alertMessage/AlertMessage';
import { fetchVacancies } from './VacancySlice';
import { fetchStages } from '../stageControl/StageSlice';


const vacanciesWithStages = createSelector(
  state => state.vacancies.vacancies,
  state => state.stages.stages,
  (vacancies, stages) => ({stages, vacancies})
)

const VacanciesCards = () => {
  const dispatch = useDispatch();
  const { stages, vacancies } = useSelector(vacanciesWithStages);
  const { loadingStatus } = useSelector(state => state.vacancies);
  const [ selectedCardId, setSelectedCardId ] = useState(null);
  useEffect(() => {
    dispatch(fetchStages());
    dispatch(fetchVacancies());
  
  }, [dispatch]);
  
  const getArrayItemById = (array, id) => {
    return array.find(item => item.id === id)
  };


  const renderCard = (vacancy, id, stages) => {
    const { currentStageId } = vacancy;
    return (
      <VacancyCardItem
        setSelectedCardId={setSelectedCardId}
        selectedCardId={selectedCardId}
        key={id} 
        stages={stages.filter(elem => elem.vacancyId === selectedCardId)}
        vacancy={vacancy} 
        currentStage={getArrayItemById(stages, currentStageId)} 
      />  
    )
  };

  const rendeCardsList = (vacancies, stages) => {
    if (vacancies.length === 0 ) {
      return <p>There is no vacancies</p>
    }
    return vacancies.map((vacancy, id) => renderCard(vacancy, id, stages)
    )
  };

  return (
    <Box py={10} px={20} position="relative">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} xl={6}>
          {rendeCardsList(vacancies, stages)}
        </Grid>
        {getArrayItemById(vacancies, selectedCardId) && 
          <Grid item xs={12} sm={6} xl={6}>
            <DetailedCard 
              vacancy={getArrayItemById(vacancies, selectedCardId)} 
              stages={stages.filter(elem => elem.vacancyId === selectedCardId)}
              setSelectedCardId={setSelectedCardId}
              getArrayItemById={getArrayItemById} 
            />
          </Grid>}
      </Grid> 
      {loadingStatus !== ('iddle' || 'loading') && <AlertMessage loadingStatus={loadingStatus} />}
    </Box>
    
  )
}

export default VacanciesCards