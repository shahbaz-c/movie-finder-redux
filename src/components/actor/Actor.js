import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ActorCredits from './ActorCredits';
import PreLoader from '../PreLoader';
import profileAvatar from '../../images/profile.jpeg';

import { getActor } from '../../features/actor/actorSlice';

const Actor = () => {
	const dispatch = useDispatch();
	const { loading, actor } = useSelector((state) => state.actor);
	const { profile_path, name, gender, biography, place_of_birth, birthday } =
		actor;
	const { id } = useParams();

	useEffect(() => {
		dispatch(getActor(id));
	}, [dispatch]);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<div>
			<div className='card actor-card mt-5 mx-4'>
				<div className='row'>
					{profile_path === null ? (
						<>
							<div className='col-sm-4'>
								<img
									src={profileAvatar}
									alt={name}
									className='img-fluid movie-card-img'
									loading='lazy'
								/>
							</div>
							<div className='col-sm-8'>
								<div className='card-body'>
									<h4 className='card-title mb-3'>{name}</h4>
									{gender === 1 ? (
										<h6>Actress Information Unavailable</h6>
									) : (
										<h6>Actor Information Unavailable</h6>
									)}
									<p className='card-text mt-4'>{biography}</p>
								</div>
							</div>
						</>
					) : (
						<>
							<div className='col-lg-4 actor-container'>
								<img
									src={`https://image.tmdb.org/t/p/original${profile_path}`}
									alt={name}
									className='img-fluid movie-card-img actor-movie-img'
									loading='lazy'
								/>
							</div>

							<div className='col-lg-8'>
								<div className='card-body actor-card-body'>
									<h4 className='card-title mb-3'>{name}</h4>
									<h6 className='actor-place'>
										Place of Birth:{' '}
										<span className='text-white'>{place_of_birth}</span>
									</h6>
									<h6 className='actor-day'>
										Birthday: <span className='text-white'>{birthday}</span>
									</h6>
									<p className='card-text mt-4 actor-bio'>{biography}</p>
								</div>
							</div>
						</>
					)}
				</div>
			</div>

			<div className='m-5 p-3 text-white bg-dark home-bg'>
				<h2 className='ms-3 my-2'>Filmography</h2>
				<ActorCredits />
			</div>
		</div>
	);
};

export default Actor;
