import './App.css';
import PageButtons from './components/PageButtons';
import Footer from './components/Footer';

function App() {
	return (
		<div className='App'>
			<PageButtons name='previous' />
			<PageButtons name='next' />
			<Footer />
		</div>
	);
}

export default App;
