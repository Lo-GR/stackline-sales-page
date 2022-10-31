import { configureStore} from '@reduxjs/toolkit';
import salesHistorySlice from './slices/salesHistorySlice'


export const salesHistoryStore = configureStore({
  reducer: {
    salesHistory: salesHistorySlice
  }
})