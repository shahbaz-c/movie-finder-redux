import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PreLoader from '../PreLoader';

import { getPopular } from '../../features/homepage/popularSlice';

const Popular = () => {
	const dispatch = useDispatch();
	const { loading, popular } = useSelector((state) => state.popular);

	useEffect(() => {
		dispatch(getPopular());
	}, [dispatch]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div className='m-5 p-3 text-white bg-dark home-bg home-container'>
			<h2 className='ms-3 my-2'>Popular</h2>
			<div className='movie-grid mx-3 my-4'>
				{popular.map((pop) => {
					const { id, title, poster_path } = pop;
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

export default Popular;
