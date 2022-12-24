import { configureStore } from '@reduxjs/toolkit';

import trendingReducer from './features/homepage/trendingSlice';
import popularReducer from './features/homepage/popularSlice';
import topRatedReducer from './features/homepage/topRatedSlice';
import comingSoonReducer from './features/homepage/comingSoonSlice';
import movieInfoReducer from './features/movies/movieInfoSlice';
import relatedMovieReducer from './features/movies/relatedMovieSlice';
import movieCreditsReducer from './features/movies/movieCreditsSlice';
import watchlistReducer from './features/watchlist/watchlistSlice';
import actorReducer from './features/actor/actorSlice';
import actorCreditsReducer from './features/actor/actorCreditsSlice';
import searchReducer from './features/search/searchSlice';

export const store = configureStore({
	reducer: {
		trending: trendingReducer,
		popular: popularReducer,
		topRated: topRatedReducer,
		comingSoon: comingSoonReducer,
		movieInfo: movieInfoReducer,
		relatedMovie: relatedMovieReducer,
		movieCredits: movieCreditsReducer,
		watchlist: watchlistReducer,
		actor: actorReducer,
		actorCredits: actorCreditsReducer,
		searchResults: searchReducer,
	},
});
