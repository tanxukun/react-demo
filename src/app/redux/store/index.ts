import { configureStore } from '@reduxjs/toolkit';
import titleReducer from '../reducer/titleSlice';

const store = configureStore({
    reducer: {
        title: titleReducer
    }
})

export default store;