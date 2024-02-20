import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const initialState = {
  tasks: null,
};
const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(task => task.id !== action.payload);
    },
    changeStatus: (state, action) => {
      const taskStatus = state.tasks.filter(task => task.id == action.payload);
      taskStatus[0].isCompleted = !taskStatus[0].isCompleted;
    },
  },
});

export const {addTask, removeTask, changeStatus} = tasksSlice.actions;

export default persistReducer(persistConfig, tasksSlice.reducer);
