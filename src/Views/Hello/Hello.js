import React from 'react';
import './Hello.css';
import lax from "../../res/Lax.jpg";
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar, NestedList } from '../../Components';
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
		<p className="paragraphText">My name is Elexandra Tran (she/her). A third year computer science student at the University of Toronto from Mississauga, ON.</p>
		</div>
		</div>

		<div className="topicContainer">
		<div className='textDiv'>
		<p className="titleText">lacrosse.</p>
		<p className="paragraphText">
			Some cool milestones.
			<ul>
			<li>I started playing women's field lacrosse in high school, in 2016.</li>
  			<li>I later tried a different variation of lacrosse in 2018, called box lacrosse and simply fell in love with it.</li>
  			<li>Unfortunately, I encountered in multiple grave injuries which required surgery and intense rehabilitation.</li>
  			<li>As of April 2019, I became a lacrosse official.</li>
			</ul>Aside from playing, I like watching pro lacrosse (NLL). I often attend the Toronto Rocks home games in the Scotiabank Arena!
		</p>
		<p className="paragraphText">Here are some of the teams I've joined throughout the years...
		</p>
		<NestedList/>
		</div>
		</div>

		<div className="topicContainer">
		<div className='textDiv'>
		<p className="titleText">bucket list.</p>
		<p className="paragraphText">
			<ul>
			<li>Travel to Europe! I want to travel intercontinent via train. In particular, I really want to visit Santorini, Greece.</li>
  			<li>Travel to Asia! Some of the destinations include: Vietnam, South Korea, China, Japan.</li>
  			<li>2017</li>
  			<li>Milk</li>
			</ul>
		</p>
		</div>
		</div>

		<div className="topicContainer">
		<div className='textDiv'>
		<p className="titleText">bucket list.</p>
		<p className="paragraphText">My name is Elexandra Tran (pronounced [i∙leks∙and∙ra]). I am a third year computer science student at the University of Toronto from Mississauga, ON. lacrosse and I'm an epic gamer.</p>
		</div>
		</div>

		<div className="topicContainer">
		<div className='textDiv'>
		<p className="titleText">bucket list.</p>
		<p className="paragraphText">My name is Elexandra Tran (pronounced [i∙leks∙and∙ra]). I am a third year computer science student at the University of Toronto from Mississauga, ON. lacrosse and I'm an epic gamer.</p>
		</div>
		</div>

		</div>
	  );
	}
  }
  
export default Hello;