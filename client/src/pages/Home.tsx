import Typewriter from 'typewriter-effect';

import '../assets/scss/home.scss';

const Home = () => (
  <section id='home'>
    <h1>Nguyen Tran Khoi</h1>
    <Typewriter
      options={{
        strings: ['Developer'],
        autoStart: true,
        loop: true,
      }}
    />
  </section>
);

export default Home;
