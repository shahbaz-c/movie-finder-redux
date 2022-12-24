import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PreLoader from '../PreLoader';

import { getTopRated } from '../../features/homepage/topRatedSlice';

const TopRated = () => {
	const dispatch = useDispatch();
	const { loading, topRated } = useSelector((state) => state.topRated);

	useEffect(() => {
		dispatch(getTopRated());
	}, [dispatch]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div className='m-5 p-3 text-white bg-dark home-bg home-container'>
			<h2 className='ms-3 my-2'>Top Rated</h2>
			<div className='movie-grid mx-3 my-4'>
				{topRated.map((top) => {
					const { id, title, poster_path } = top;
					return (
						<Link to={`/movie/${id}`} title={title} key={id}>
							<img
								src={`https://image.tmdb.org/t/p/original${poster_path}`}
								alt={title}
								className='img-size img-trans'
								loading='lazy'
							/>
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default TopRated;
