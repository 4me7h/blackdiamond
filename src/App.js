//botstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//styles
import './App.scss';
//components
import Hero from './components/Hero'; 
import About from './components/About';

function App() {
  return (
    <div>
      <Hero />
      <About />
    </div>
  );
}

export default App;
