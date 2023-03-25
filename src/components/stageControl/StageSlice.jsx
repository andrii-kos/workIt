import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';
import { updateCurrentStageId } from '../vacanciesCards/VacancySlice';

const initialState = {
  stages: [],
  loadingStatus: 'iddle',
  postingStatus: 'iddle',
  updatingStatus: 'iddle',
};

export const fetchStages = createAsyncThunk(
  'stages/fetchStages',
  () => {
    const { request } = useHttp();
    return request('http://localhost:3000/stages');
  }
);

export const postNewStage = createAsyncThunk(
  'stages/postNewStage',
  async (data, thunkAPI) => {
    const { id, newStage } = data;
    const { id: stageId } = newStage;
    const { request } = useHttp();
    const response = await request(
      `http://localhost:3000/vacancies/${id}/stages/`, 
      'POST', 
      JSON.stringify({...newStage, vacancyId: id})
    );
    thunkAPI.dispatch(updateCurrentStageId({id, currentStageId: stageId}));
    return response
  }
);

export const updateStage = createAsyncThunk(
  'stages/updateStage',
  ({id, updatedStage}) => {
    const { request } = useHttp();
    return request(
      `http://localhost:3000/stages/${id}`,
      'PUT',
      JSON.stringify({...updatedStage})
    )
  }
)

export const deleteStage = createAsyncThunk(
  'stages/deleteStage',
  async ({id, vacancyId}, {dispatch, getState}) => {
    const { request } = useHttp();
    const response =  await request(
      `http://localhost:3000/stages/${id}`, 
      'DELETE'
    )
    const {stages: {stages}} = getState();

    const getNewCurrentStageId = (stages) => {
      const remainingStages = stages.filter(elem => elem.vacancyId === vacancyId);
      if (remainingStages.length !== 0) {
        return remainingStages[remainingStages.length - 1].id
      } else {
        return null
      }
    };

    dispatch(updateCurrentStageId({id: vacancyId, currentStageId: getNewCurrentStageId(stages)}));
    return response
  }
);

const StageSlice = createSlice({
  name: 'stages',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStages.pending, state=> {
        state.updatingStatus = 'updating';
      })
      .addCase(fetchStages.fulfilled, (state, {payload}) => {
        state.updatingStatus = 'iddle';
        state.stages = payload;
      })
      .addCase(fetchStages.rejected, state => {
        state.loadingStatus = 'error';
      })

      .addCase(postNewStage.pending, (state) => {
        state.updatingStatus = 'updating';
      })
      .addCase(postNewStage.fulfilled, (state, {payload}) => {
        state.loadingStatus = 'iddle';
        state.stages.push(payload)
      })
      .addCase(postNewStage.rejected, state => {
        state.loadingStatus = 'error';
      })

      .addCase(updateStage.pending, state => {
        state.updatingStatus = 'updating';
      })
      .addCase(updateStage.fulfilled, (state, action) => {
        state.stages = state.stages.map(elem => {
          if (elem.id === action.payload.id) {
            return action.payload
          } else {
            return elem
          }
        })
        state.loadingStatus = 'iddle';
      })
      .addCase(updateStage.rejected, state => {
        state.loadingStatus = 'error';
      })

      .addCase(deleteStage.pending, state => {
        state.updatingStatus = 'updating';
      })
      .addCase(deleteStage.fulfilled, (state, {meta}) => {
        state.stages = state.stages.filter(({id}) => id !== meta.arg.id)
        state.loadingStatus = 'iddle';
      })
      .addCase(deleteStage.rejected, (state, action) => {
        state.loadingStatus = 'error';
      })
  }
});

const { actions, reducer } = StageSlice;

export { actions }
export default reducer