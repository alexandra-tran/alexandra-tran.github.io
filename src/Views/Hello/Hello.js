import React from 'react';
import './Hello.css';
import lax from "../../res/Lax.jpg";
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar } from '../../Components';
// import { Link } from 'react-router-dom';

class Hello extends React.Component {
	
  
	render() {
	  return (
		<div>
		<Bar hello={true} landing={false} goodbye={false}/>
		<div className="topicContainer">
		<img className="pic-of-lax" alt='pic of lax' src={lax}></img>
		<div className='textDiv'>
		<p className="titleText">hello. 👋</p>
		<p className="paragraphText">My name is Elexandra Tran. I play lacrosse and I'm an epic gamer.</p>
		</div>
		</div>
		</div>
	  );
	}
  }
  
export default Hello;