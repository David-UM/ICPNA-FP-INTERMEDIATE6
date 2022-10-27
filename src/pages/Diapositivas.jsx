import { useState } from 'react';
import PageButtons from '../components/PageButtons';
import Footer from '../components/Footer';
import Presentation from './Presentation';

const Diapositivas = ({ number, handleNext, handlePrevious }) => {
	return (
		<>
			{number == 1 || number == 2 || number == 3 ? (
				<PageButtons name='previous' handle={handlePrevious} number={number} />
			) : (
				console.log('No previous page')
			)}
			{number == 0 || number == 1 || number == 2 ? (
				<PageButtons name='next' handle={handleNext} number={number} />
			) : (
				console.log('No next page')
			)}

			<Presentation page={number} />
			<Footer />
		</>
	);
};

export default Diapositivas;
