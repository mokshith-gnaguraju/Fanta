
import { useNavigate } from 'react-router-dom';

import './App.css';


const App = () => {

  const navigate = useNavigate();

  const Click = () => {
    navigate('/First');
  };


  return (
    <div>

      <nav className="navbar">
        
        <img src='' alt='picture'/>
 <h2 style={{color:'Orange'}}> Coca-Cola </h2>

        <ul className="nav-links">
         
          <li><a href="#">Home</a></li>
          <li><a href="#">Products</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#"> Weather</a></li>
          <li><a href="#"> Location</a></li>
        </ul>
      </nav>

      <header className="hero">
        <h1>Welcome to Coca-Cola</h1>
        <p>Refreshing the world, one story at a time.</p>
        <button onClick={Click} >Explore Now</button>
      </header>

      <footer className="footer">
        <p>&copy; 2025 Coca-Cola Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

