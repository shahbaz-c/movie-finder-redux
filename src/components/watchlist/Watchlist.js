import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCheck } from '@fortawesome/free-solid-svg-icons';

import MyWatchlist from './MyWatchlist';
import WatchedList from './WatchedList';

const Watchlist = () => {
	return (
		<>
			<div className='m-5 p-3 text-white bg-dark home-bg' id='watchlist'>
				<h2 className='ms-3 my-2 mt-3'>
					<FontAwesomeIcon icon={faBookmark} className='me-3 bookmark-icon' />
					Watchlist
				</h2>

				<MyWatchlist />
			</div>

			<div className='m-5 p-3 text-white bg-dark home-bg' id='watched'>
				<h2 className='ms-3 my-2 mt-3'>
					<FontAwesomeIcon icon={faCheck} className='me-3 tick-icon' />
					Watched
				</h2>

				<WatchedList />
			</div>
		</>
	);
};

export default Watchlist;
