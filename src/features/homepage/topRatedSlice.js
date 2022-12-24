import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import API_KEY from '../../config';

const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`;

const initialState = {
	loading: false,
	topRated: [],
};

export const getTopRated = createAsyncThunk(
	'topRated/getTopRated',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(url);
			return response.data.results;
		} catch (error) {
			return rejectWithValue('Error fetching Top Rated data!');
		}
	}
);

export const topRatedSlice = createSlice({
	name: 'topRated',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getTopRated.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getTopRated.fulfilled, (state, action) => {
			state.loading = false;
			state.topRated = action.payload;
		});
		builder.addCase(getTopRated.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default topRatedSlice.reducer;
