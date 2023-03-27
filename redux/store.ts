import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cvReducer from './reducer';

const reducer = combineReducers({
  cv: cvReducer
});

const store = configureStore({reducer});

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = typeof store.dispatch;

export default store;