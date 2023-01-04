import '../../assets/scss/navbar.scss';

const NavBar = () => {
  const smoothScrollTo = (elementId: string) => {
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ block: 'start', behavior: 'smooth' });
  };

  return (
    <header>
      <nav>
        <button
          type='button'
          onClick={() => smoothScrollTo('home')}
          className='options'
        >
          Home
        </button>
        <button
          type='button'
          onClick={() => smoothScrollTo('about-me')}
          className='options'
        >
          About Me
        </button>
        <button
          type='button'
          onClick={() => smoothScrollTo('projects')}
          className='options'
        >
          Projects
        </button>
        <button
          type='button'
          onClick={() => smoothScrollTo('contact')}
          className='options'
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default NavBar;
