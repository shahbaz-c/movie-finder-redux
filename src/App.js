import React from 'react';

// Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';

// Routing
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/nav/Navbar';
import Footer from './components/nav/Footer';
import Home from './components/homepage/Home';
import Movie from './components/movie/Movie';
import Watchlist from './components/watchlist/Watchlist';
import About from './pages/About';
import Actor from './components/actor/Actor';
import SearchResults from './components/nav/SearchResults';
import PageNotFound from './components/PageNotFound';

const App = () => {
	return (
		<div className='App'>
			<Navbar />

			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='movie/:id' element={<Movie />} />
					<Route path='/search' element={<SearchResults />} />
					<Route path='/watchlist' element={<Watchlist />} />
					<Route path='/about' element={<About />} />
					<Route path='/person/:id' element={<Actor />} />
					<Route path='/*' element={<PageNotFound />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
};

export default App;
