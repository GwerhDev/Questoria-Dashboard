import { configureStore } from '@reduxjs/toolkit';
import accountReducer from './accountSlice';
import adventureReducer from './adventureSlice';
import questReducer from './questSlice';

export const store = configureStore({
  reducer: {
    account: accountReducer,
    adventures: adventureReducer,
    quests: questReducer,
  },
});