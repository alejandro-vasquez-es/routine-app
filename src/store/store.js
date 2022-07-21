import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { routineSlice } from './routine/routineSlice';

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		routine: routineSlice.reducer
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false
	})
})