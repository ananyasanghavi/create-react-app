import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


import { Profile } from './components/Profile';
import { Home } from './components/Home';
import { Register } from './components/Register';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path="/register" element={<Register />}/>
    </Routes>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
    </Router>
      
      
    </div>
  );
}

export default App;
