import React from 'react';

const About = () => {
	return (
		<div className='m-5 p-3 text-white bg-dark home-bg'>
			<h1 className='ms-3 my-2'>About</h1>
			<h6 className='ms-3 mt-4 text-white'>
				This application utilises The Movie Database API allowing users to view
				information about their favourite movies. It gives them the ability to
				view the most popular, top rated, and upcoming movies as well as the
				trending movie of the week. Users are able to view each movies cast as
				well as information on each cast member. Users also have the ability to
				add movies to their watchlist to keep track of movies they wish to watch
				and track the movies they have already seen.
			</h6>

			<img
				src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
				alt='TMDB'
				className='ms-3 mt-2 tmdb-logo'
			/>
			<p className='ms-3'>
				This product uses the TMDB API but is not endorsed or certified by TMDB.
			</p>
		</div>
	);
};

export default About;
