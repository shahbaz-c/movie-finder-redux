import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

import API_KEY from '../../config';

const initialState = {
	loading: false,
	actorCredits: [],
};

export const getActorCredits = createAsyncThunk(
	'actorCredits/getActorCredits',
	async (id, { rejectWithValue }) => {
		try {
			const response = await axios(
				`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
			);
			return response.data.cast;
		} catch (error) {
			return rejectWithValue('Error fetching Actor Credit data!');
		}
	}
);

export const actorCreditsSlice = createSlice({
	name: 'actorCredits',
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getActorCredits.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(getActorCredits.fulfilled, (state, action) => {
			state.loading = false;
			state.actorCredits = action.payload;
		});
		builder.addCase(getActorCredits.rejected, (state, action) => {
			state.loading = false;
			console.log(action);
		});
	},
});

export default actorCreditsSlice.reducer;
