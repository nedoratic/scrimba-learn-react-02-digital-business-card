import ProfileImage from '../assets/nedoratic.jpg';
import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';

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
					<img src={LinkedIn} alt='LinkedIn Logo' width={30} />
				</a>
				<a href='#' className='card__footer__link'>
					<img src={GitHub} alt='GitHub Logo' width={30} />
				</a>
			</div>
		</div>
	);
};

export default DigitalBusinessCard;
