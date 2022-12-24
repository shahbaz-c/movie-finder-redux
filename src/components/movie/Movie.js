import React from 'react';
import MovieInfo from './MovieInfo';
import RelatedMovies from './RelatedMovies';
import Cast from './Cast';

const Movie = () => {
	return (
		<div>
			<MovieInfo />
			<Cast />
			<RelatedMovies />
		</div>
	);
};

export default Movie;
