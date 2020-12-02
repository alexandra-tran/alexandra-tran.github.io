import React from 'react';
import './Hello.css';
import lax from "../../res/Lax.jpg";
import acnh from "../../res/acnh.jpg";
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar } from '../../Components';
// import { Link } from 'react-router-dom';

class Hello extends React.Component {
	
  
	render() {
	  return (
		<div>
		<Bar hello={true} landing={false} goodbye={false}/>
		
		<div className="helloContainer">
		<p className="hello">hello. 👋 my name is Elexandra Tran (she/her). a third year comp sci student from Mississauga, ON. <a href="mailto:elexandra.tran@utoronto.ca" className='logo'><i class="far fa-envelope fa-2x"></i></a></p>
		</div>

		<div className="topicContainer">
		<img className="pic-of-lax" alt='pic of lax' src={lax}></img>
		<div className='textDiv'>
		<p className="titleText">lacrosse.</p>
		<p className="paragraphText">
			some cool milestones.
			<ul>
			<li>i started playing women's field lacrosse in high school, in 2016.</li>
  			<li>i later tried a different variation of lacrosse in 2018, called box lacrosse and simply fell in love with it.</li>
  			<li>unfortunately, I encountered in multiple grave injuries which required surgery and intense rehabilitation.</li>
  			<li>as of April 2019, I became a lacrosse official.</li>
			</ul>to see some of the teams I've joined throughout the years, click <a className='textLink' href='./Lacrosse'>here</a>.
		</p>
		</div>
		</div>

		<div className="topicContainer">
		<div className='textDiv'>
		<p className="titleText">bucket list.</p>
		<p className="paragraphText">
			<ul>
			<li>travel to Europe. i want to travel intercontinent via train. in particular, i really want to visit Santorini, Greece.</li>
  			<li>travel to Asia! some of the destinations include: Vietnam, South Korea, China, Japan.</li>
  			<li>become a twitch affiliate by reaching 50 followers on<a href="https://www.twitch.tv/sootysoot" className='logo'><i class="fab fa-twitch"></i></a></li>
			</ul>
		</p>
		</div>
		</div>

		<div className="topicContainer">
		<div className='textDiv'>
		<p className="titleText">concerts.</p>
		<p className="paragraphText">My name is Elexandra Tran (pronounced [i∙leks∙and∙ra]). I am a third year computer science student at the University of Toronto from Mississauga, ON. lacrosse and I'm an epic gamer.</p>
		</div>
		</div>

		<div className="topicContainer">
		<img className="pic-of-acnh" alt='pic of animal crossing' src={acnh}></img>
		<div className='textDiv'>
		<p className="titleText">fountain pens.</p>
		<p className="paragraphText">I currently have a TWSBI eco</p>
		<p className="paragraphText"></p>
		</div>
		</div>

		</div>
	  );
	}
  }
  
export default Hello;