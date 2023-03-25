import { configureStore } from '@reduxjs/toolkit';
import vacancies from '../components/vacanciesCards/VacancySlice';
import stages from '../components/stageControl/StageSlice';


const store = configureStore({
  reducer: {vacancies, stages},
  middlewere: getDefaultMiddlewere => getDefaultMiddlewere,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store