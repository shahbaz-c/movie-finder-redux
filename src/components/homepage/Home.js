import React from 'react';

import Trending from './Trending';
import Popular from './Popular';
import TopRated from './TopRated';
import ComingSoon from './ComingSoon';

const Home = () => {
	return (
		<div>
			{/* Hero - trending movies */}
			<Trending />

			{/* Popular movies */}
			<Popular />

			{/* Top Rated movies */}
			<TopRated />

			{/* Coming Soon movies */}
			<ComingSoon />
		</div>
	);
};

export default Home;
