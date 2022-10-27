import './../styles/Caratula.css';
import Footer from '../components/Footer';
const Caratula = ({ handle }) => {
	return (
		<div className='Caratula'>
			<div className='Caratula-titulo'>
				<span className='Caratula-topic'>Topic : </span>
				<span className='Caratula-text'>
					How man is affecting the environment
				</span>
			</div>
			<div className='Caratula-body'>
				<div className='Caratula-body-names'>
					<h1 className='DavidUrbano'>David Urbano</h1>
					<h1 className='YaniHuayhua'>Yanni Huayhua</h1>
				</div>
				<div className='Caratula-body-button'>
					<img
						src='https://cdn.shopify.com/s/files/1/0254/0516/1520/files/RGB__V6.1.png?v=1633671894'
						alt='World'
						className='Caratula-image'
					/>
					<button className='Caratula-start' onClick={handle}>
						Start
					</button>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Caratula;
