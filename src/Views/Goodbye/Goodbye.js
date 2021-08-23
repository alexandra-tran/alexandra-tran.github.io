import React from 'react';
import './Goodbye.css';
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar } from '../../Components';
// import { Link } from 'react-router-dom';
import wave from '../../res/waveywave.gif';

class Goodbye extends React.Component {
	
  
	render() {
	  return (
		<div>
			<Bar goodbye={true} landing={false} hello={false} projects={false}/>
			<div className="topicContainer">
			<img className="me-waving" src={wave} alt="Me waving"/>
			<div className='textDiv'>
			<p className="titleText">goodbye now. 👋</p>
			<p className="paragraphText">Thank you for visiting. Please feel free to email me!</p>
			<p className='paragraphText'><i class="far fa-envelope"></i> <i class="fas fa-long-arrow-alt-right"></i><a href="mailto:elexandra.tran@utoronto.ca" className='logo'>elexandra.tran@utoronto.ca</a><a href='mailto:elexandra.tran@utoronto.ca'></a></p>
			</div>
			</div>
		</div>
	  );
	}
  }
  
export default Goodbye;