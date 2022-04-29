import { createStore, combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import BaseReducer from './Reducers/baseReducer';


const persistConfig = {
  key: 'root',
  storage : AsyncStorage,
  stateReconciler: autoMergeLevel2,
}


const rootReducer = combineReducers({
    Base: BaseReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
  reducer: {
    Base: BaseReducer
  }
})
export const persistor = persistStore(store);

export default store;