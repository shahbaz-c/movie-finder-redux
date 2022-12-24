import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCheck, faCircle } from '@fortawesome/free-solid-svg-icons';
import blackImage from '../../images/blackImage.webp';

import PreLoader from '../PreLoader';

import { getMovie } from '../../features/movies/movieInfoSlice';
import { addToMyWatchlist } from '../../features/watchlist/watchlistSlice';

const MovieInfo = () => {
	const dispatch = useDispatch();
	const { loading, movie } = useSelector((state) => state.movieInfo);
	const { myWatchlist, watchedList } = useSelector((state) => state.watchlist);
	const { related } = useSelector((state) => state.relatedMovie);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getMovie(id));
	}, [dispatch, related, id]);

	let addedMovie = myWatchlist.find((item) => item.id === movie.id);
	let watchedMovie = watchedList.find((item) => item.id === movie.id);

	const disableWatchlist = addedMovie ? true : watchedMovie ? true : false;

	const {
		title,
		backdrop_path,
		poster_path,
		overview,
		release_date,
		runtime,
		budget,
		revenue,
	} = movie;

	const budgetStr = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
	}).format(budget);

	const revenueStr = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 0,
	}).format(revenue);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<>
			{poster_path === null || backdrop_path === null ? (
				<div>
					<div className='card actor-card m-5'>
						<div className='row'>
							<div className='col-md-4 no-img-container'>
								<img
									src={blackImage}
									alt={title}
									className='img-fluid movie-card-img movie-no-img'
								/>
								<h5 className='no-img-text'>Movie Poster Unavailable</h5>
							</div>
							<div className='col-md-8'>
								<div className='card-body'>
									<h4 className='card-title text-white mb-3'>{title}</h4>
									<h6 className='card-subtitle mb-3'>Plot</h6>
									<p className='card-text text-white me-3'>{overview}</p>
									<h6 className='mb-4'>
										Further movie information is unavailable
									</h6>
									<h4>
										<button
											className={
												addedMovie
													? 'added-to-watchlist'
													: watchedMovie
													? 'added-to-watchlist'
													: 'watchlist-btn'
											}
											title='ADD TO WATCHLIST'
											onClick={() => {
												dispatch(addToMyWatchlist(movie));
											}}
											disabled={disableWatchlist}
										>
											<span className='fa-stack'>
												<FontAwesomeIcon
													icon={faCircle}
													className='fa-stack-2x watchlist-circle'
												/>
												<FontAwesomeIcon
													icon={disableWatchlist ? faCheck : faPlus}
													className='watchlist-icon fa-stack-1x'
												/>
											</span>
										</button>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className='movie-bg-container'>
					<img
						src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
						alt={title}
						className='bg-img position-relative'
						loading='lazy'
					/>

					<div className='card movie-card movie-content'>
						<div className='row'>
							<div className='col-md-4'>
								<img
									src={`https://image.tmdb.org/t/p/original${poster_path}`}
									alt={title}
									className='img-fluid movie-card-img'
									loading='lazy'
								/>
							</div>
							<div className='col-md-8'>
								<div className='card-body movie-card-body'>
									<h4 className='card-title text-white my-3 movie-card-title'>
										{title}
									</h4>
									<h6 className='card-subtitle mb-2 mb-3 movie-plot'>Plot</h6>
									<p className='card-text text-white me-3 movie-overview'>
										{overview}
									</p>

									<h6 className='mb-3 movie-release'>
										Release Date:{' '}
										<span className='text-white'>{release_date}</span>
									</h6>
									<h6 className='mb-3 movie-runtime'>
										Runtime: <span className='text-white'>{runtime} mins</span>
									</h6>
									<br className='line-break' />
									<h6 className='mb-3 movie-budget'>
										Budget: <span className='text-white'>{budgetStr}</span>
									</h6>
									<h6 className='mb-4 movie-boxOffice'>
										Box Office: <span className='text-white'>{revenueStr}</span>
									</h6>

									<h4 className='movie-info-watchlist-btn'>
										<button
											className={
												addedMovie
													? 'added-to-watchlist'
													: watchedMovie
													? 'added-to-watchlist'
													: 'watchlist-btn'
											}
											title='ADD TO WATCHLIST'
											onClick={() => {
												dispatch(addToMyWatchlist(movie));
											}}
											disabled={disableWatchlist}
										>
											<span className='fa-stack'>
												<FontAwesomeIcon
													icon={faCircle}
													className='fa-stack-2x watchlist-circle'
												/>
												<FontAwesomeIcon
													icon={disableWatchlist ? faCheck : faPlus}
													className='watchlist-icon fa-stack-1x'
												/>
											</span>
										</button>
									</h4>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default MovieInfo;
