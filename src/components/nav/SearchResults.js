import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import PreLoader from '../PreLoader';

const SearchResults = () => {
	const { loading, searchResults } = useSelector(
		(state) => state.searchResults
	);

	if (loading) {
		return <PreLoader />;
	}

	return (
		<>
			{searchResults.length > 0 ? (
				<div className='m-5 p-3 text-white bg-dark home-bg'>
					<h2 className='ms-3 my-2'>Search Results</h2>
					<div className='movie-grid mx-3 my-4'>
						{searchResults.map((search) => {
							const { title, poster_path, id } = search;
							return (
								<div key={id}>
									{poster_path === null ? (
										<Link
											to={`/movie/${id}`}
											title={title}
											className='text-decoration-none align-middle'
										>
											<div className='no-search-img img-trans'>
												<h6 className='text-center text-white position-absolute top-50 start-50 translate-middle search-title'>
													{title}
												</h6>
											</div>
										</Link>
									) : (
										<Link to={`/movie/${id}`} title={title}>
											<img
												src={`https://image.tmdb.org/t/p/original${poster_path}`}
												alt={title}
												className='img-size img-trans'
											/>
										</Link>
									)}
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<div className='m-5 p-3 text-white bg-dark home-bg'>
					<h2 className='ms-3 my-2'>Search Results</h2>
					<h5 className='ms-3 my-3 not-found'>
						Movie not found. Please search again.
					</h5>
				</div>
			)}
		</>
	);
};

export default SearchResults;
