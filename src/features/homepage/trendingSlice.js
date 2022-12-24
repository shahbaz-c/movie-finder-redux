import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import API_KEY from '../../config';

const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`;

const initialState = {
	loading: false,
	trending: [],
};

// Fetch API
// export const getTrending = createAsyncThunk(
// 	'trending/getTrending',
// 	async () => {
// 		const response = await fetch(url);

// 		const data = await response.json();
// 		// return data;
// 		console.log(data);
// 	}
// );

// Axios
export const getTrending = createAsyncThunk(
	'trending/getTrending',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios(url);
			return response.data.results[0];
			// console.log(response.data.results[0]);
		} catch (error) {
			return rejectWithValue('Error fetching Trending data!');
		}
	}
);

export const trendingSlice = createSlice({
	name: 'trending',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getTrending.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getTrending.fulfilled, (state, action) => {
			state.loading = false;
			state.trending = action.payload;
		});
		builder.addCase(getTrending.rejected, (state, action) => {
			console.log(action);
			state.loading = false;
		});
	},
});

export default trendingSlice.reducer;
