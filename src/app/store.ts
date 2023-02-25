import {configureStore} from '@reduxjs/toolkit';
import messageReducer from '../components/messages/messageSlice';
const store = configureStore({
  reducer: {
    chatLog: messageReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
