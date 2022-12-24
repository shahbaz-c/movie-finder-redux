import React from 'react';

const Footer = () => {
	return (
		<footer className='bg-dark footer'>
			<h5 className='pt-1 footer-text'>
				<span className='footer-color'> Built with React</span> &copy;{' '}
				{new Date().getFullYear()} Movie Finder
			</h5>
		</footer>
	);
};

export default Footer;
