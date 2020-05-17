import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer__logo'>
        KAI SUZUKI
      </a>

      <ul className='permalinks'>
        <li>
          <a href='#home'>Home</a>
        </li>
        <li>
          <a href='#about'>About</a>
        </li>
        <li>
          <a href='#experience'>Experience</a>
        </li>
        <li>
          <a href='#expertise'>Expertise</a>
        </li>
      
        <li>
          <a href='#portfolio'>Portfolio</a>
        </li>
        <li>
          <a href='#quotes'>Quotes</a>
        </li>
        <li>
          <a href='#contact'>Contact</a>
        </li>
      </ul>

      

      <div className='footer__copyright'>
        <small>
          Created by yours truly,{' '}
          <a
            href='https://www.linkedin.com/in/mohamad-salimi/'
            aria-label='Salimi'
            target='_blank'
            rel='noreferrer'
          >
            Salimi
          </a>{' '}
          &copy; {new Date().getFullYear()}.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
