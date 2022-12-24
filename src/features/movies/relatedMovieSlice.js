import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import API_KEY from '../../config';

const initialState = {
	loading: false,
	related: [],
};

export const getRelatedMovie = createAsyncThunk(
	'movie/getRelatedMovie',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US@page=1`
			);
			return response.data.results;
		} catch (error) {
			return rejectWithValue('Error fetching Related Movie data!');
		}
	}
);

export const relatedMovieSlice = createSlice({
	name: 'relatedMovie',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getRelatedMovie.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getRelatedMovie.fulfilled, (state, action) => {
			state.loading = false;
			state.related = action.payload;
		});
		builder.addCase(getRelatedMovie.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default relatedMovieSlice.reducer;
