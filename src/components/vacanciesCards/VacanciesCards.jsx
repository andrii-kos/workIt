import { Box, Grid, Snackbar, Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { createSelector } from '@reduxjs/toolkit';

import VacancyCardItem from "../vacancyCard/vacancyCardItem/VacancyCardItem";
import DetailedCard from '../vacancyCard/detailedCard/DetailedCard';
import AlertMessage from '../alertMessage/AlertMessage';
import CardListSkeleton from '../skeleton/CardListSkeleton';
import ErrorMessage from '../errorMessage/ErrorMessage';
import { fetchVacancies } from './VacancySlice';
import { fetchStages } from '../stageControl/StageSlice';

import getArrayItemById from '../../utils/getArrayItemById';

const vacanciesWithStages = createSelector(
  state => state.vacancies.vacancies,
  state => state.stages.stages,
  (vacancies, stages) => ({stages, vacancies})
)

const VacanciesCards = () => {
  const dispatch = useDispatch();
  const { stages, vacancies } = useSelector(vacanciesWithStages);
  const { status: vacancyStatus } = useSelector(state => state.vacancies)
  const { errorMessage } = useSelector(state => state.vacancies);
  const { status: stagesStatus} = useSelector(state => state.stages);
  const [ selectedCardId, setSelectedCardId ] = useState(null);

  useEffect(() => {
    dispatch(fetchVacancies());
    dispatch(fetchStages());
  }, [dispatch]);

  const renderCardList = (vacancies, stages) => {
    if (vacancyStatus.fetch === 'loading') {
      return <CardListSkeleton />
    } else if (vacancyStatus.fetch === 'error') {
      return <ErrorMessage errorMessage={errorMessage.message}/>
    } else if (vacancies.length === 0 && vacancyStatus.fetch === 'success' ) {
      return <p>There is no vacancies</p>
    } else {
      const renderCard = (vacancy, stages) => {
        const { id, currentStageId } = vacancy;
        return (
          <VacancyCardItem
            setSelectedCardId={setSelectedCardId}
            selectedCardId={selectedCardId}
            key={id} 
            stages={stages.filter(elem => elem.vacancyId === id)}
            vacancy={vacancy} 
            currentStage={getArrayItemById(stages, currentStageId)} 
          />  
        )
      };
      return vacancies.map((vacancy) => renderCard(vacancy, stages))
      
    };
  };

  return (
    <Box py={10} px={20} position="relative">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} xl={6}>
        <AlertMessage vacancyStatus={vacancyStatus} />
          {renderCardList(vacancies, stages)}
        </Grid>
        {getArrayItemById(vacancies, selectedCardId) && 
          <Grid item xs={12} sm={6} xl={6}>
            <DetailedCard 
              vacancy={getArrayItemById(vacancies, selectedCardId)} 
              stages={stages.filter(elem => elem.vacancyId === selectedCardId)}
              setSelectedCardId={setSelectedCardId}
            />
          </Grid>}
      </Grid> 
    </Box>
  )
}

export default VacanciesCards