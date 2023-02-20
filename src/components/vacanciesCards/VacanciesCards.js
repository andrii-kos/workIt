import './VacanciesCards.scss';
import Box from '@mui/material/Box';
import Masonry from '@mui/lab/Masonry';
import VacancyCard from "../vacancyCard/VacancyCard";
import VacancyCardApplication from '../vacancyCardApplication/VacancyCardApplication';
import VacancyCardInterview from '../vacancyCardInterview/VacancyCardInterview';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchVacancies } from './VacancySlice';

const VacanciesCards = () => {
  const dispatch = useDispatch();
  const vacancies = useSelector(state => state.vacancies.vacancies);
  useEffect(() => {
    dispatch(fetchVacancies());
  }, [])
  const cardToRender = (props, id) => {
    const {currentStageId, stages} = props;
    const [currentStage] = stages.filter(elem => elem.id === currentStageId)

      switch(currentStage.stageType) {
        case 'Interview':
          return <VacancyCardInterview key={id} {...props} /> 
        case 'Application': 
          return <VacancyCardApplication key={id} {...props} />
        default: 
          return <VacancyCard key={id} {...props} />
      }
  }

  const vacanciesList = (elem) => {
    if (elem.length === 0 ) {
      return <p>There is no vacancies</p>
    }
    return elem.map(({...props}, id) => cardToRender({...props}, id)
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