import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

const initialState = {
  vacancies: [],
  loadingStatus: 'iddle',
  postingStatus: 'iddle',
  updatingStatus: 'iddle',
}

export const fetchVacancies = createAsyncThunk(
  'vacancy/fetchVacancies',
  () => {
    const { request } = useHttp();
    return request('http://localhost:3000/vacancies')
  }
)

export const postNewVacanty = createAsyncThunk(
  'vacancy/postNewVacancy',
  (vacancy) => {
    const { request } = useHttp();
    return request('http://localhost:3000/vacancies', 'POST', JSON.stringify(vacancy))
  }
)

export const postNewStage = createAsyncThunk(
  'vacancy/postNewStage',
  async (data) => {
    const { id, newStage } = data;
    const { id: stageId } = newStage;
    const { request } = useHttp();
    const { stages } = await request(`http://localhost:3000/vacancies/${id}`);
    return request(`http://localhost:3000/vacancies/${id}`, 'PATCH', JSON.stringify({ currentStageId: stageId, stages: [...stages, newStage] }));
  }
)

export const updateCurrentStageId = createAsyncThunk(
  'vacancy/updateCurrentStageId',
  (data) => {
    const { id, currentStageId } = data;
    const { request } = useHttp();
    return request(`http://localhost:3000/vacancies/${id}`, 'PATCH', JSON.stringify({currentStageId: currentStageId}))
  }
)

const VacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVacancies.pending, state => {
        state.loadingStatus = 'loading';
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.vacancies = action.payload
        state.loadingStatus = 'iddle';
      })
      .addCase(fetchVacancies.rejected, (state) => {
        state.loadingStatus = 'error';
      })
      .addCase(postNewVacanty.pending, state => {
        state.postingStatus = 'posting';
      })
      .addCase(postNewVacanty.fulfilled, (state, action) => {
        state.postingStatus = 'iddle';
        state.vacancies.push(action.payload);
      })
      .addCase(postNewVacanty.rejected, state => {
        state.postingStatus = 'error';
      })
      .addCase(updateCurrentStageId.pending, state => {
        state.updatingStatus = 'updating';
      })
      .addCase(updateCurrentStageId.fulfilled, (state, action) => {
        const vacancyInd = state.vacancies.findIndex(elem => elem.id === action.payload.id);
        state.vacancies[vacancyInd] = action.payload;
      })
      .addCase(updateCurrentStageId.rejected, state => {
        state.loadingStatus = 'error';
      })
      .addCase(postNewStage.pending, (state) => {
        state.updatingStatus = 'updating';
      })
      .addCase(postNewStage.fulfilled, (state, action) => {
        const vacancyInd = state.vacancies.findIndex(elem => elem.id === action.payload.id);
        state.vacancies[vacancyInd].stages.push(action.payload.stages);
        state.vacancies[vacancyInd].currentStageId = action.payload.currentStageId;
      })
      .addCase(postNewStage.rejected, state => {
        state.loadingStatus = 'error';
      })
  }
})

const {actions, reducer} = VacancySlice

export {actions}
export default reducer