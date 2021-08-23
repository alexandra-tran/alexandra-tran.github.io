import React from 'react';
import './Hello.css';
import lax from "../../res/Lax.jpg";
import acnh from "../../res/acnh.jpg";
import blue from "../../res/blue.jpg";
import purple from "../../res/purple.jpg";
import light_purple from "../../res/light_purple.jpg";
import scribble from "../../res/scribble_writing.jpg"
import normal from "../../res/normal_writing.jpg"
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar, Timeline } from '../../Components';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom';

class Hello extends React.Component {
	
  
	render() {
	  return (
		<div>
		<Bar hello={true} landing={false} goodbye={false} projects={false}/>
		
		<Fade left>
		<div className="helloContainer">
		<p className="hello">hello. 👋 my name is Elexandra Tran (she/her). a third year comp sci student from Mississauga, ON. <a href="mailto:elexandra.tran@utoronto.ca" className='logo'><i class="far fa-envelope fa-2x"></i></a></p>
		</div>
		</Fade>
		<img className="pic-of-lax" alt='pic of lax' src={lax}></img>

		{/* <div className="topicContainer">
		<img className="pic-of-lax" alt='pic of lax' src={lax}></img>
		<p className="titleText">lacrosse.</p>
		<div className='textDiv'>
		<Timeline></Timeline>
		<a className='textLink' href='#/Lacrosse'>Some teams I've been on</a>
		</div>
		</div> */}

		<div className="topicContainer">
		<div>
		<p className="titleText">about me.</p>
		<p className="paragraphText">
			<ul>
			<li>i really wish to travel to Europe. i want to travel within the continent via train. in particular, i really want to visit Santorini, Greece.</li>
  			<li>i sometimes stream on<a href="https://www.twitch.tv/sootysoot" className='logo'><i class="fab fa-twitch"></i></a></li>
			</ul>
		</p>
		</div>
		</div>

		{/* <div className="topicContainer">
		<div>
		<p className="titleText">animal crossing.</p>
		<p className="paragraphText">this is my character in animal crossing.</p>
		<img className="pic-of-acnh" alt='pic of animal crossing' src={acnh}></img>
		</div>
		</div> */}

		<div className="topicContainer">
		<div>
		<p className="titleText">fountain pens.</p>
		<p className="paragraphText">I am currently using the TWSBI eco fountain pen and the Sailor shikiori inks (see below). I am in love with these colours!!!</p>
		<p className="paragraphText"></p>
		</div>
		</div>

		<div className="topicContainer">
		<img className="pic-of-acnh" alt='pic of blue' src={blue}></img>
		<img className="pic-of-acnh" alt='pic of purple' src={purple}></img>
		<img className="pic-of-acnh" alt='pic of light_purple' src={light_purple}></img>
		<img className="pic-of-writing" alt='pic of scribble' src={scribble}></img>
		<img className="pic-of-writing" alt='pic of normal' src={normal}></img>
		<div>
		<p className="titleText"></p>
		<p className="paragraphText"></p>
		<p className="paragraphText"></p>
		</div>
		</div>

		</div>

		
	  );
	}
  }
  
export default Hello;