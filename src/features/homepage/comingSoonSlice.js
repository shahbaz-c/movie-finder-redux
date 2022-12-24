import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import API_KEY from '../../config';

const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`;

const initialState = {
	loading: false,
	comingSoon: [],
};

export const getComingSoon = createAsyncThunk(
	'comingSoon/getComingSoon',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(url);
			return response.data.results;
		} catch (error) {
			return rejectWithValue('Error fetching Coming Soon data');
		}
	}
);

export const comingSoonSlice = createSlice({
	name: 'comingSoon',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getComingSoon.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getComingSoon.fulfilled, (state, action) => {
			state.loading = false;
			state.comingSoon = action.payload;
		});
		builder.addCase(getComingSoon.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default comingSoonSlice.reducer;
