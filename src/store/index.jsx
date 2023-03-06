import { configureStore } from '@reduxjs/toolkit';
import vacancies from '../components/vacanciesCards/VacancySlice'


const store = configureStore({
  reducer: {vacancies},
  middlewere: getDefaultMiddlewere => getDefaultMiddlewere,
  devTools: process.env.NODE_ENV !== 'production'
})

export default store