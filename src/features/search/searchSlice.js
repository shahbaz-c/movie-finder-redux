import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import API_KEY from '../../config';

const initialState = {
	loading: false,
	searchResults: [],
};

export const getSearchResults = createAsyncThunk(
	'search/searchResults',
	async (text, { rejectWithValue }) => {
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${text}&page=1&include_adult=false`
			);
			return response.data.results;
		} catch (error) {
			return rejectWithValue('Error fetching Search Query data!');
		}
	}
);

export const searchSlice = createSlice({
	name: 'searchResults',
	initialState,

	extraReducers: (builder) => {
		builder.addCase(getSearchResults.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getSearchResults.fulfilled, (state, action) => {
			state.loading = false;
			state.searchResults = action.payload;
		});
		builder.addCase(getSearchResults.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default searchSlice.reducer;
