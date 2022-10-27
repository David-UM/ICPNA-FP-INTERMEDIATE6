import './App.css';
import { useState } from 'react';
import Diapositivas from './pages/Diapositivas';
import Caratula from './pages/Caratula';
function App() {
	let [number, setNumber] = useState(0);

	const handleNext = () => {
		if (number >= 0 && number < 3) {
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
			{number === 0 ? (
				<Caratula handle={handleNext} />
			) : (
				<Diapositivas
					number={number}
					handleNext={handleNext}
					handlePrevious={handlePrevious}
				/>
			)}
		</div>
	);
}

export default App;
