import React from 'react';
import './Hello.css';
import lax from "../../res/Lax.jpg";
import blue from "../../res/blue.jpg";
import purple from "../../res/purple.jpg";
import light_purple from "../../res/light_purple.jpg";
import scribble from "../../res/scribble_writing.jpg"
import normal from "../../res/normal_writing.jpg"
import varsity from "../../res/Var.jpg";
import lax_play from "../../res/lax-play.JPG";
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
		<p className="hello">hello. 👋 my name is Elexandra Tran (she/her/hers) from Guelph, ON.</p>
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
			I recently graduated UofT in June 2023. I'm not up to much this year. LOL.
		</p>
		<p className="titleText">lacrosse.</p>
		<p className="paragraphText">
			This summer I played box lacrosse. My COMEBACK. I've played lacrosse since 2015 and it is my absolute favourite sport. However I got a major knee injury, preventing me from playing until now. And I'm incredibly proud to take my first step back into it and played with the Mississauga Badgers in Ontario <a className='textLink' href="http://owbll.ca/">Women's Major Series Lacrosse</a>. I did dabble a bit playing with UofT in undergrad but did not love it. 
		</p>
		<img className="varsity-pic" alt='varsity-pic' src={varsity}></img>
		<img className="lax-play" alt='varsity-pic' src={lax_play}></img>
		<p className="titleText">trips in 2023.</p>
		<p className="paragraphText"> 
			<ul>
				<li>New York City, NY (May)</li>
				<li>Wolfville, NS (June)</li>
				<li>Sauble Beach & Tobermory, ON with my lacrosse team &lt;3 (July)</li>
				<li>Orlando, FL ~yeah Disneyworld (July)</li>
				<li>Nova Scotia again (Aug)</li>
				<li>Cancun, Mexico (Sep)</li>
				<li>London, UK (Sep)</li>
				<li>Edinburgh, UK (Sep)</li>
				<li>Paris, France (Oct)</li>
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
		<p className="lastUpdateText">
			last updated: Dec 2023
		</p>

		</div>

		
	  );
	}
  }
  // i really want to visit Santorini, Greece.i sometimes stream on<a href="https://www.twitch.tv/sootysoot" className='logo'><i class="fab fa-twitch"></i></a>
export default Hello;