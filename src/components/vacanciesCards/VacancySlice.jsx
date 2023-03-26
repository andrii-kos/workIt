import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

const initialState = {
  vacancies: [],
  status: {
    fetch: 'iddle',
    post: 'iddle',
    update: 'iddle',
    delete: 'iddle',
    updateCurrentId: 'iddle'
  },
  errorMessage: {}
  
}

export const fetchVacancies = createAsyncThunk(
  'vacancy/fetchVacancies',
  () => {
    const { request } = useHttp();
    return request('http://localhost:3000/vacancies');
  }
);

export const postNewVacancy = createAsyncThunk(
  'vacancy/postNewVacancy',
  (vacancy) => {
    const { request } = useHttp();
    return request('http://localhost:3000/vacancies', 'POST', JSON.stringify(vacancy))
  }
);

export const updateVacancy = createAsyncThunk(
  'vacancy/updateVacancy',
  ({id, updatedVacancy}) => {
    const { request } = useHttp();
    return request(
      `http://localhost:3000/vacancies/${id}`,
      'PUT',
      JSON.stringify({...updatedVacancy})
    )
  }
)

export const deleteVacancy = createAsyncThunk(
  'vacancy/deleteVacancy',
  (id) => {
    const { request } = useHttp();
    return  request(`http://localhost:3000/vacancies/${id}`, 'DELETE')
  }
);

export const updateCurrentStageId = createAsyncThunk(
  'stages/updateCurrentStageId',
  ({id, currentStageId}) => {
    const { request } = useHttp();
    return request(
      `http://localhost:3000/vacancies/${id}`, 
      'PATCH', 
      JSON.stringify({currentStageId: currentStageId})
    )
  }
);

const VacancySlice = createSlice({
  name: 'vacancy',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchVacancies.pending, state => {
        state.status.fetch = 'loading';
      })
      .addCase(fetchVacancies.fulfilled, (state, {payload}) => {
        state.vacancies = payload;
        state.status.fetch = 'success';
      })
      .addCase(fetchVacancies.rejected, (state, {error}) => {
        state.status.fetch = 'error';
        state.errorMessage = error;
      })

      .addCase(postNewVacancy.pending, state => {
        state.status.post = 'loading';
      })
      .addCase(postNewVacancy.fulfilled, (state, {payload}) => {
        state.vacancies.push(payload);
        state.status.post = 'success';
      })
      .addCase(postNewVacancy.rejected, (state, {error}) => {
        state.status.post = 'error';
        state.errorMessage = error;
      })

      .addCase(updateVacancy.pending, state => {
        state.status.update = 'loading';
      })
      .addCase(updateVacancy.fulfilled, (state, {payload}) => {
        state.vacancies = state.vacancies.map(vacancy => (vacancy.id === payload.id ? payload : vacancy))
        state.status.update = 'success';
      })
      .addCase(updateVacancy.rejected, (state, {error}) => {
        state.status.fetch = 'update';
        state.errorMessage = error;
      })

      .addCase(deleteVacancy.pending, state => {
        state.status.delete = 'loading';
      })
      .addCase(deleteVacancy.fulfilled, (state, {meta}) => {
        state.vacancies = state.vacancies.filter(elem => elem.id !== meta.arg);
        state.status.delete = 'success';
      })
      .addCase(deleteVacancy.rejected, (state, {error}) => {
        state.status.delete = 'error';
        state.errorMessage = error;
      })

      .addCase(updateCurrentStageId.pending, state => {
        state.status.updateCurrentId = 'loading';
      })
      .addCase(updateCurrentStageId.fulfilled, (state, {payload}) => {
        state.vacancies.map(vacancy => {
          if (vacancy.id === payload.id) {
            vacancy.currentStageId = payload.currentStageId;
            return vacancy
          } else {
            return vacancy
          }
        });
        state.status.updateCurrentId = 'success';
      })
      .addCase(updateCurrentStageId.rejected, (state, {error}) => {
        state.status.updateCurrentId = 'error';
        state.errorMessage = error;
      })
  }
});

const { actions, reducer } = VacancySlice

export { actions }
export default reducer