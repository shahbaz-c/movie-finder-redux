import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import API_KEY from '../../config';

const initialState = {
	loading: false,
	movie: {},
};

export const getMovie = createAsyncThunk(
	'movie/getMovie',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
			);
			return response.data;
		} catch (error) {
			return rejectWithValue('Error fetching Movie data!');
		}
	}
);

export const movieInfoSlice = createSlice({
	name: 'movieInfo',
	initialState,

	extraReducers: (builder) => {
		builder.addCase(getMovie.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getMovie.fulfilled, (state, action) => {
			state.loading = false;
			state.movie = action.payload;
		});
		builder.addCase(getMovie.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default movieInfoSlice.reducer;
