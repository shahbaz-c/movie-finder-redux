import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import API_KEY from '../../config';

const initialState = {
	loading: false,
	credits: [],
};

export const getMovieCredits = createAsyncThunk(
	'movie/getMovieCredits',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
			);
			return response.data.cast;
		} catch (error) {
			return rejectWithValue('Error fetching Movie Credits data!');
		}
	}
);

export const movieCreditsSlice = createSlice({
	name: 'movieCredits',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getMovieCredits.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getMovieCredits.fulfilled, (state, action) => {
			state.loading = false;
			state.credits = action.payload;
		});
		builder.addCase(getMovieCredits.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default movieCreditsSlice.reducer;
