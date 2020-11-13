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
			<img className="pic-of-lax" src={lax}></img>
			<p className="text">HELLO</p>
			<p>I play lacrosse</p>
		</div>
	  );
	}
  }
  
export default Hello;