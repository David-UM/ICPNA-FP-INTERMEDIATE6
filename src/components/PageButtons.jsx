import './../styles/PageButtons.css';

const PageButtons = ({ name }) => {
	return (
		<>
			<button onClick={() => console.log(name)} className={name}>
				{name}
			</button>
		</>
	);
};

export default PageButtons;
