import React from 'react';
import './Hello.css';
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar } from '../../Components';
// import { Link } from 'react-router-dom';

class Hello extends React.Component {
	
  
	render() {
	  return (
		<div className="helloDiv">
			<Bar hello={true} landing={false} goodbye={false}/>
		</div>
	  );
	}
  }
  
export default Hello;