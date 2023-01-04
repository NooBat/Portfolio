import NavBar from './components/NavBar';
import About from './pages/About';
import Home from './pages/Home';

const App = () => (
  <>
    <NavBar />
    <main>
      <Home />
      <About />
    </main>
  </>
);

export default App;
