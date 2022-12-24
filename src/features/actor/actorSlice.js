import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import API_KEY from '../../config';

const initialState = {
	loading: false,
	actor: {},
};

export const getActor = createAsyncThunk(
	'actor/getActor',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
			);
			return response.data;
			// console.log(response.data);
		} catch (error) {
			return rejectWithValue('Error fecthing Actor data!');
		}
	}
);

export const actorSlice = createSlice({
	name: 'actor',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getActor.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getActor.fulfilled, (state, action) => {
			state.loading = false;
			state.actor = action.payload;
		});
		builder.addCase(getActor.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default actorSlice.reducer;
