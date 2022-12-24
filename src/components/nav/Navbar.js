import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const scrollToTop = () => {
	window.scrollTo(0, 0);
};

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand-md navbar-dark bg-dark sticky-top'>
			<div className='container-fluid text-light'>
				<Link
					to='/'
					className='navbar-brand'
					title='Home'
					onClick={scrollToTop}
				>
					<FontAwesomeIcon icon={faFilm} className='ms-3 pe-2 movie-icon' />
					Movie Finder
				</Link>
				<button
					className='navbar-toggler'
					type='button'
					data-bs-toggle='collapse'
					data-bs-target='#navbarSupportedContent'
					aria-controls='navbarSupportedContent'
					aria-expanded='false'
					aria-label='Toggle navigation'
				>
					<span className='navbar-toggler-icon'></span>
				</button>
				<div className='collapse navbar-collapse' id='navbarSupportedContent'>
					<ul className='navbar-nav me-auto mb-2 mb-md-0'>
						<li className='nav-item'>
							<Link to='/' className='nav-link' title='Home'>
								Home
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/watchlist' className='nav-link' title='Watchlist'>
								Watchlist
							</Link>
						</li>
						<li className='nav-item'>
							<Link to='/about' className='nav-link' title='About'>
								About
							</Link>
						</li>
					</ul>

					<SearchBar />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
