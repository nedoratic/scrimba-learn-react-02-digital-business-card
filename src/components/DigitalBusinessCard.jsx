import ProfileImage from '../assets/nedoratic.jpg';

const DigitalBusinessCard = () => {
	return (
		<div className='card'>
			<img className='card__image' src={ProfileImage} alt='Nedo Ratic' width={320} />
			<div className='card__body'>
				<h1 className='card__body__title'>Nedo Ratic</h1>
				<h2 className='card__body__description'>Frontend Developer</h2>
				<button>Email</button>
				<h3>About</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				<h3>Interests</h3>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, doloremque.</p>
			</div>
			<div className='card__footer'>
				<a href='#' className='card__footer__link'>
					Linkedin
				</a>
				<a href='#' className='card__footer__link'>
					Github
				</a>
			</div>
		</div>
	);
};

export default DigitalBusinessCard;
