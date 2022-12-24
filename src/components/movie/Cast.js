import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import profileAvatar from '../../images/profile.jpeg';
import PreLoader from '../PreLoader';

import { getMovieCredits } from '../../features/movies/movieCreditsSlice';

const Cast = () => {
	const dispatch = useDispatch();
	const { loading, credits } = useSelector((state) => state.movieCredits);
	const { related } = useSelector((state) => state.relatedMovie);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getMovieCredits(id));
	}, [dispatch, related]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div>
			<div className='m-5 p-3 text-white bg-dark cast-bg'>
				<h2 className='ms-3 my-2'>Cast</h2>
				<div className='cast-grid mx-3 my-4'>
					{credits.map((actor) => {
						const { cast_id, name, profile_path, character, id } = actor;
						return (
							<div key={cast_id} className='cast-card img-trans'>
								<Link to={`/person/${id}`}>
									{profile_path === null ? (
										<img
											src={profileAvatar}
											alt={name}
											className='img-unavailable'
											title={name}
											loading='lazy'
										/>
									) : (
										<img
											src={`https://image.tmdb.org/t/p/original${profile_path}`}
											alt={name}
											className='img-fluid'
											title={name}
											loading='lazy'
										/>
									)}
									<div className='cast-hover'>
										<h6 className='text-center mt-3 text-white cast-text'>
											{name}
										</h6>
										<p className='text-center cast-text'>'{character}'</p>
									</div>
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Cast;
