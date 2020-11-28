import React from 'react';
import '../../App.css';
import me from '../../res/me.jpg';
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar } from '../../Components';
// import { Link } from 'react-router-dom';

class Landing extends React.Component {
	
  
	render() {
	  return (
		<div>
		<Bar hello={false} landing={true} goodbye={false}/>
        <header className="App-header">
        <img src={me} className="App-logo" alt="logo" />
        <p className='title-text'>elexandra tran.</p>
        <p className='location-text'>toronto, canada | university of toronto</p>
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
  }
  
export default Landing;