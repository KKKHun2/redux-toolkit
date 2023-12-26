import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import userReducer from './userSlice';
import themeReducer from './themeSlice';


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    user: userReducer,
    theme: themeReducer,
  },
});
export default store;
