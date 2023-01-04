import Typewriter from 'typewriter-effect';

import '../assets/scss/home.scss';

const Home = () => (
  <Typewriter
    options={{
      strings: ['Developer'],
      autoStart: true,
      loop: true,
    }}
  />
);

export default Home;
