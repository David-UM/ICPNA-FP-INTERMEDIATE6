import './../styles/PageButtons.css';

const PageButtons = ({ name, handle }) => {
	return (
		<>
			<button onClick={handle} className={name}>
				{name}
			</button>
		</>
	);
};

export default PageButtons;
