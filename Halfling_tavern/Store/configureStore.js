import { configureStore } from '@reduxjs/toolkit'
import RaceReducer from './Reducers/baseReducer';
import CharaReducer from './Reducers/charaReducer';

export const store = configureStore({
  reducer: {
    race: RaceReducer,
    chara: CharaReducer
  }
})

export default store;