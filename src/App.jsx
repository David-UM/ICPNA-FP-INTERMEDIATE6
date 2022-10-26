import './App.css';
import { useState } from 'react';
import PageButtons from './components/PageButtons';
import Footer from './components/Footer';
import Presentation from './pages/Presentation';

function App() {
	let [number, setNumber] = useState(0);

	const handleNext = () => {
		if (number >= 0 && number < 2) {
			setNumber((number = number + 1));
		} else {
			console.log('Se paso de 3');
		}
	};

	const handlePrevious = () => {
		if (number > 0) {
			setNumber((number = number - 1));
		} else if (number < 1) {
			setNumber((number = 0));
		}
	};

	return (
		<div className='App'>
			<PageButtons name='previous' handle={handlePrevious} number={number} />
			<PageButtons name='next' handle={handleNext} number={number} />
			<Presentation page={number} />
			<Footer />
		</div>
	);
}

export default App;
