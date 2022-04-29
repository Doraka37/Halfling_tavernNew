import { configureStore } from '@reduxjs/toolkit'
import BaseReducer from './Reducers/baseReducer';




export const store = configureStore({
  reducer: {
    character: BaseReducer
  }
})

export default store;