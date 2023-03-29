import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import useHttp from '../../hooks/useHttp';
import { updateCurrentStageId } from '../vacanciesCards/VacancySlice';

const initialState = {
  stages: [],
  status: {
    fetch: 'iddle',
    post: 'iddle',
    update: 'iddle',
    delete: 'iddle',
  },
  errorMessage: {}
  
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
  async (data, {dispatch}) => {
    const { id, newStage } = data;
    const { id: stageId } = newStage;
    const { request } = useHttp();
    const response = await request(
      `http://localhost:3000/vacancies/${id}/stages/`, 
      'POST', 
      JSON.stringify({...newStage, vacancyId: id})
    );
    dispatch(updateCurrentStageId({id, currentStageId: stageId}));
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
      .addCase(fetchStages.pending, state => {
        state.status.fetch = 'loading';
      })
      .addCase(fetchStages.fulfilled, (state, {payload}) => {
        state.stages = payload;
        state.status.fetch = 'success';
      })
      .addCase(fetchStages.rejected, (state, {error}) => {
        state.status.fetch = 'error';
        state.errorMessage = error;
      })

      .addCase(postNewStage.pending, state => {
        state.status.post = 'loading';
      })
      .addCase(postNewStage.fulfilled, (state, {payload}) => {
        state.stages.push(payload);
        state.status.post = 'success';
      })
      .addCase(postNewStage.rejected, (state, {error}) => {
        state.status.post = 'error';
        state.errorMessage = error;
      })

      .addCase(updateStage.pending, (state) => {
        state.status.update = 'loading';
      })
      .addCase(updateStage.fulfilled, (state, {payload}) => {
        state.stages = state.stages.map(stage => stage.id === payload.id ? payload : stage);
        state.status.update = 'success';
      })
      .addCase(updateStage.rejected, (state, {error}) => {
        state.status.update = 'error';
        state.errorMessage = error;
      })

      .addCase(deleteStage.pending, state => {
        state.status.delete = 'loading';
      })
      .addCase(deleteStage.fulfilled, (state, {meta}) => {
        state.stages = state.stages.filter(({id}) => id !== meta.arg.id)
        state.status.loadingStatus = 'success';
      })
      .addCase(deleteStage.rejected, (state, {error}) => {
        state.status.delete = 'error';
        state.errorMessage = error;
      })
  }
});

const { actions, reducer } = StageSlice;

export { actions }
export default reducer