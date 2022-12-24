import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PreLoader from '../PreLoader';

import { getTrending } from '../../features/homepage/trendingSlice';

const Trending = () => {
	const dispatch = useDispatch();
	const { loading, trending } = useSelector((state) => state.trending);
	const { title, overview, backdrop_path, id } = trending;

	useEffect(() => {
		dispatch(getTrending());
	}, [dispatch]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<>
			<div className='backdrop-container'>
				<Link to={`/movie/${id}`} title={title}>
					<img
						src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
						className='trending-img'
						alt={title}
					/>
					<h5>
						<span className='badge  trending-badge'>#Trending</span>
					</h5>

					<h3 className='movie-title text-white m-2'>{title}</h3>
					<p className='homepage-overview m-2 me-4 text-white'>{overview}</p>
				</Link>
			</div>
		</>
	);
};

export default Trending;
