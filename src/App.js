import logo from './logo.svg';
import './App.css';
import { Bar } from './Components';

function App() {
  return (
    <div className="App">
      <Bar/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Welcome to <code>sootysoot's</code> castle.</p>
        <div className='logoContainer'>
        <a href="https://www.linkedin.com/in/tran-alexandra/" className="logo"><i class="fab fa-linkedin fa-2x"></i></a>
        <a href="https://github.com/alexandra-tran" className='logo'><i class="fab fa-github fa-2x"></i></a>
        <a href="https://gitlab.com/alexandra-tran" className='logo'><i class="fab fa-gitlab fa-2x"></i></a>
        <a href="https://facebook.com/elexandra.tran" className='logo'><i class="fab fa-facebook fa-2x"></i></a>
        <a href="https://instagram.com/woahalexisonfire" className='logo'><i class="fab fa-instagram fa-2x"></i></a>
        </div>
      </header>
    </div>
  );
}

export default App;
