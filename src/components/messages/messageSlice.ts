import {createSlice} from '@reduxjs/toolkit';
import {Message} from '../../models/Message';

const initialState: Message[] = [];

export const messageSlice = createSlice({ 
  name: 'messages',
  initialState: {
    messages: initialState
  },
  reducers: {
    addMessage: (state, action) => {
      let newMessage: Message = action.payload;
      state.messages = [...state.messages, newMessage];
    }
  }
})

export const { addMessage } = messageSlice.actions;
export default messageSlice.reducer;
