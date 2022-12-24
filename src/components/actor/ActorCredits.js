import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import PreLoader from '../PreLoader';

import { getActorCredits } from '../../features/actor/actorCreditsSlice';

const ActorCredits = () => {
	const dispatch = useDispatch();
	const { loading, actorCredits } = useSelector((state) => state.actorCredits);
	const { id } = useParams();

	useEffect(() => {
		dispatch(getActorCredits(id));
	}, [dispatch]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div>
			<div className='cast-grid mx-3 my-4'>
				{actorCredits.map((credits) => {
					const { id, title, poster_path } = credits;
					return (
						<div key={id}>
							{poster_path === null ? (
								<Link
									to={`/movie/${id}`}
									title={title}
									className='text-decoration-none align-middle'
								>
									<div className='no-img img-trans'>
										<h6 className='text-center text-white position-absolute top-50 start-50 translate-middle'>
											{title}
										</h6>
									</div>
								</Link>
							) : (
								<div className='actor-credit-card img-trans'>
									<Link to={`/movie/${id}`} title={title}>
										<img
											src={`https://image.tmdb.org/t/p/original${poster_path}`}
											alt={title}
											className='img-fluid'
											title={title}
											loading='lazy'
										/>
									</Link>
								</div>
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ActorCredits;
