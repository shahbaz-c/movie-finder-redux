import { createSlice } from '@reduxjs/toolkit';

// My watchlist - local storage
const watchlistItem = localStorage.getItem('Watchlist')
	? JSON.parse(localStorage.getItem('Watchlist'))
	: [];

// Set local storage - myWatchlist
const setWatchlistItem = (watchlist) => {
	localStorage.setItem('Watchlist', JSON.stringify(watchlist));
};

// Watched list - local storage
const watchedListItem = localStorage.getItem('WatchedList')
	? JSON.parse(localStorage.getItem('WatchedList'))
	: [];

// Set local storage - watchedList
const setWatchedListItem = (watchedList) => {
	localStorage.setItem('WatchedList', JSON.stringify(watchedList));
};

const initialState = {
	myWatchlist: watchlistItem,
	watchedList: watchedListItem,
};

export const watchlistSlice = createSlice({
	name: 'watchlist',
	initialState,
	reducers: {
		addToMyWatchlist: (state, action) => {
			state.myWatchlist.push(action.payload);
			setWatchlistItem(state.myWatchlist);
		},

		deleteMovieFromWatchlist: (state, action) => {
			state.myWatchlist = state.myWatchlist.filter(
				(movie) => movie.id !== action.payload
			);
			setWatchlistItem(state.myWatchlist);
		},

		addToWatchedList: (state, action) => {
			state.watchedList.push(action.payload);
			setWatchedListItem(state.watchedList);
		},

		deleteMovieFromWatchedList: (state, action) => {
			state.watchedList = state.watchedList.filter(
				(movie) => movie.id !== action.payload
			);
			setWatchedListItem(state.watchedList);
		},

		moveMovieBackToWatchlist: (state, action) => {
			state.myWatchlist.push(action.payload);
			setWatchlistItem(state.myWatchlist);
		},
	},
});

export const {
	addToMyWatchlist,
	deleteMovieFromWatchlist,
	addToWatchedList,
	deleteMovieFromWatchedList,
	moveMovieBackToWatchlist,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
