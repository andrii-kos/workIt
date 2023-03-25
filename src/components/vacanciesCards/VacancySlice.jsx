import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';

const initialState = {
  vacancies: [],
  loadingStatus: 'iddle',
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
    console.log(updatedVacancy)
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
  (data) => {
    const { id, currentStageId } = data;
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
        state.loadingStatus = 'loading';
      })
      .addCase(fetchVacancies.fulfilled, (state, action) => {
        state.loadingStatus = 'iddle';
        state.vacancies = action.payload;
      })
      .addCase(fetchVacancies.rejected, (state) => {
        state.loadingStatus = 'error';
      })

      .addCase(postNewVacancy.pending, state => {
        state.loadingStatus = 'loading';
      })
      .addCase(postNewVacancy.fulfilled, (state, action) => {
        state.loadingStatus = 'iddle';
        state.vacancies.push(action.payload);
      })
      .addCase(postNewVacancy.rejected, state => {
        state.loadingStatus = 'error';
      })

      .addCase(updateVacancy.pending, state => {
        state.loadingStatus = 'loading';
      })
      .addCase(updateVacancy.fulfilled, (state, action) => {
        state.vacancies = state.vacancies.map(elem => {
          if (elem.id === action.payload.id) {
            return action.payload
          } else {
            return elem
          }
        })
        state.loadingStatus = 'iddle';
      })
      .addCase(updateVacancy.rejected, state => {
        state.loadingStatus = 'error';
      })

      .addCase(deleteVacancy.pending, state => {
        state.loadingStatus = 'loading';
      })
      .addCase(deleteVacancy.fulfilled, (state, action) => {
        state.loadingStatus = 'success';
        state.vacancies = state.vacancies.filter(elem => elem.id !== action.meta.arg);
      })
      .addCase(deleteVacancy.rejected, state => {
        state.loadingStatus = 'error';
      })

      .addCase(updateCurrentStageId.pending, state => {
        state.loadingStatus = 'loading';
      })
      .addCase(updateCurrentStageId.fulfilled, (state, {payload}) => {
        state.loadingStatus = 'iddle';
        state.vacancies.map(elem => {
          if (elem.id === payload.id) {
            elem.currentStageId = payload.currentStageId;
            return elem
          } else {
            return elem
          }
        })
      })
      .addCase(updateCurrentStageId.rejected, state => {
        state.loadingStatus = 'error';
      })
  }
});

const { actions, reducer } = VacancySlice

export { actions }
export default reducer