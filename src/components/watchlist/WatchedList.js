import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBookmark } from '@fortawesome/free-solid-svg-icons';
import blackImage from '../../images/blackImage.webp';

import {
	deleteMovieFromWatchedList,
	moveMovieBackToWatchlist,
} from '../../features/watchlist/watchlistSlice';

const Watched = () => {
	const dispatch = useDispatch();
	const { watchedList } = useSelector((state) => state.watchlist);

	return (
		<>
			{watchedList < 1 ? (
				''
			) : watchedList.length === 1 ? (
				<h6 className='ms-3 my-2 mt-3'>{watchedList.length} Title</h6>
			) : (
				<h6 className='ms-3 my-2 mt-3'>{watchedList.length} Titles</h6>
			)}
			{watchedList.length > 0 ? (
				<div className='watchlist-grid'>
					{watchedList.map((movie) => {
						const { id, title, poster_path, release_date, overview } = movie;
						return (
							<div key={id} className='card my-4 mx-2 watchlist-card'>
								{poster_path === null ? (
									<div className='row g-0'>
										<div className='col-xl-4 no-img-container'>
											<Link to={`/movie/${id}`} title={title}>
												<img
													src={blackImage}
													alt={title}
													className='img-fluid watchlist-card-img watchlist-no-img'
												/>
												<h5 className='no-img-text text-white'>
													Movie Poster Unavailable
												</h5>
											</Link>
										</div>
										<div className='col-xl-8'>
											<div className='card-body mx-1'>
												<h5 className='card-title watchlist-title'>{title}</h5>
												<h6 className='card-subtitle mb-3 watchlist-year'>
													{release_date.substring(0, 4)}
												</h6>
												<p className='card-text watchlist-text'>{overview}</p>
												<div>
													<button className='mt-2 float-end check-del-btn'>
														<FontAwesomeIcon
															icon={faBookmark}
															className='me-3 watched-bookmark-icon'
															title='Move to Watchlist'
															onClick={() => {
																dispatch(moveMovieBackToWatchlist(movie));
																dispatch(deleteMovieFromWatchedList(id));
															}}
														/>
														<FontAwesomeIcon
															icon={faXmark}
															className='delete-icon'
															title='Remove'
															onClick={() =>
																dispatch(deleteMovieFromWatchedList(id))
															}
														/>
													</button>
												</div>
											</div>
										</div>
									</div>
								) : (
									<div className='row g-0'>
										<div className='col-xl-4'>
											<Link to={`/movie/${id}`} title={title}>
												<img
													src={`https://image.tmdb.org/t/p/original${poster_path}`}
													className='img-fluid watchlist-card-img'
													alt={title}
												/>
											</Link>
										</div>
										<div className='col-xl-8'>
											<div className='card-body mx-1'>
												<h5 className='card-title watchlist-title'>{title}</h5>
												<h6 className='card-subtitle mb-3 watchlist-year'>
													{release_date.substring(0, 4)}
												</h6>
												<p className='card-text watchlist-text'>{overview}</p>
												<div>
													<button className='mt-2 float-end check-del-btn'>
														<FontAwesomeIcon
															icon={faBookmark}
															className='me-3 watched-bookmark-icon'
															title='Move to Watchlist'
															onClick={() => {
																dispatch(moveMovieBackToWatchlist(movie));
																dispatch(deleteMovieFromWatchedList(id));
															}}
														/>
														<FontAwesomeIcon
															icon={faXmark}
															className='delete-icon'
															title='Remove'
															onClick={() =>
																dispatch(deleteMovieFromWatchedList(id))
															}
														/>
													</button>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			) : (
				<h6 className='ms-3 my-4 text-white'>No movies in your watched list</h6>
			)}
		</>
	);
};

export default Watched;
