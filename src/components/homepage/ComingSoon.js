import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PreLoader from '../PreLoader';

import { getComingSoon } from '../../features/homepage/comingSoonSlice';

const ComingSoon = () => {
	const dispatch = useDispatch();
	const { loading, comingSoon } = useSelector((state) => state.comingSoon);

	useEffect(() => {
		dispatch(getComingSoon());
	}, [dispatch]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div className='m-5 p-3 text-white bg-dark home-bg home-container'>
			<h2 className='ms-3 my-2'>Coming Soon</h2>
			<div className='movie-grid mx-3 my-4'>
				{comingSoon.map((soon) => {
					const { id, title, poster_path } = soon;
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

export default ComingSoon;
