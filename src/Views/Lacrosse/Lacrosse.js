import React from 'react';
import './Lacrosse.css';
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar, NestedList } from '../../Components';
// import { Link } from 'react-router-dom';
import box from '../../res/box.jpg';

class Lacrosse extends React.Component {
	
  
	render() {
	  return (
		<div>
			<Bar goodbye={false} landing={true} hello={false}/>
			<div className="topicContainer">
			<img className="box" src={box} alt="Me waving"/>
			<div className='textDiv'>
			<p className="titleText">some teams I've been on.</p>
			<p className="paragraphText"></p>
			</div>
            <NestedList/>
			</div>
		</div>
	  );
	}
  }
  
export default Lacrosse;