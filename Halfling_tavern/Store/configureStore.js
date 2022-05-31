import { configureStore } from '@reduxjs/toolkit'
import RaceReducer from './Reducers/baseReducer';
import CharaReducer from './Reducers/charaReducer';
import BackgroundReducer from './Reducers/backgroundReducer';

export const store = configureStore({
  reducer: {
    race: RaceReducer,
    chara: CharaReducer,
    background: BackgroundReducer
  }
})

export default store;