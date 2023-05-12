import Home from './Home';
import Skills from './Skills';
import Study from './Study';
import logo from './logo.svg';
import './App.css';


function App() {
  let language = "Hello"
  return (
    <div className="App">
      <Home />
      <Study />
      <Skills />
    </div>
  );
}

export default App;
