import ProfileImage from '../assets/nedoratic.jpg';
import Email from '../assets/email.svg';
import LinkedIn from '../assets/linkedin.svg';
import GitHub from '../assets/github.svg';
import WhatsApp from '../assets/whatsapp.svg';

const DigitalBusinessCard = () => {
	return (
		<div className='card'>
			<img className='card__image' src={ProfileImage} alt='Nedo Ratic' width={320} />
			<div className='card__body'>
				<h1 className='card__body__title'>Nedo Ratic</h1>
				<h2 className='card__body__description'>Frontend Developer</h2>
				<a href='mailto:nedoratic@gmail.com' target='_blank'>
					<button className='card__body__button'>
						<img className='card__body__button__icon' src={Email} alt='Email Icon' width={20} />
						Email
					</button>
				</a>
				<h3 className='card__body__subtitle'>About</h3>
				<p className='card__body__subtitle__description'>Frontend developer and a passionate learner, knowledgeable in HTML, CSS, and JS, enthusiastic about creating visually appealing and user-friendly web interfaces. Committed to professionalism, continuous self-improvement, and the delivery of high-quality code, I am a fast learner who embraces challenges and approaches tasks with the highest precision while staying updated with the latest industry trends and best practices.</p>
				<h3 className='card__body__subtitle'>Interests</h3>
				<p className='card__body__subtitle__description'>When I am not writing code, I enjoy spending time with my wife, children, and friends. I love playing chess and board games. I am also teaching myself to play the piano.</p>
			</div>
			<div className='card__footer'>
				<a href='https://www.linkedin.com/in/nedoratic/' target='_blank' className='card__footer__link'>
					<img src={LinkedIn} alt='LinkedIn Logo' width={30} />
				</a>
				<a href='https://github.com/nedoratic' target='_blank' className='card__footer__link'>
					<img src={GitHub} alt='GitHub Logo' width={30} />
				</a>
				<a href='https://wa.me/381695203011' target='_blank' className='card__footer__link'>
					<img src={WhatsApp} alt='WhatsApp Logo' width={30} />
				</a>
			</div>
		</div>
	);
};

export default DigitalBusinessCard;
