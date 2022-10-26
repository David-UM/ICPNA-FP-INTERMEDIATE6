import './../styles/Presentation.css';
import data from './../data/data.js';

const Presentation = ({ page }) => {
	return (
		<>
			<div className='page'>
				<h1 className='TheH1'>{data[page].tittle}</h1>
				{data[page].images.map(url => (
					<img src={url} alt={url} key={url} className='images' />
				))}
			</div>
		</>
	);
};

export default Presentation;
