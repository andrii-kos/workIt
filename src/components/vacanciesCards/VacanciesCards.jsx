import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import VacancyCard from "../vacancyCard/VacancyCard";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchVacancies } from './VacancySlice';

const VacanciesCards = () => {
  const dispatch = useDispatch();
  const vacancies = useSelector(state => state.vacancies.vacancies);

  useEffect(() => {
    dispatch(fetchVacancies());
  }, []);

  const renderCard = (props, id) => {
    const { currentStageId, stages } = props;
    const [ currentStage ] = stages.filter(elem => elem.id === currentStageId);
    return <VacancyCard  key={id} {...props} currentStage={currentStage} />   
  }

  const vacanciesList = (vacancies) => {
    if (vacancies.length === 0 ) {
      return <p>There is no vacancies</p>
    }
    return vacancies.map(({...props}, id) => renderCard({...props}, id)
    )
  }
  
  const elements = vacanciesList(vacancies);
  return (
    <Box p={5}>
      <Masonry sx={{ margin: 0}} columns={{lg:3, md:2, sm:1}} spacing={3}>
        {elements}
      </Masonry>
        
    </Box>
    
  )
}

export default VacanciesCards