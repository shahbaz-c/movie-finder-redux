import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import API_KEY from '../../config';

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

const initialState = {
	loading: false,
	popular: [],
};

export const getPopular = createAsyncThunk(
	'popular/getPopular',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(url);
			return response.data.results;
		} catch (error) {
			return rejectWithValue('Error fetching Popular data!');
		}
	}
);

export const popularSlice = createSlice({
	name: 'popular',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getPopular.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getPopular.fulfilled, (state, action) => {
			state.loading = false;
			state.popular = action.payload;
		});
		builder.addCase(getPopular.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default popularSlice.reducer;
