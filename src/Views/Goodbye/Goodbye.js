import React from 'react';
import './Goodbye.css';
// import { Avatar } from "@material-ui/core";
// import { Add } from "@material-ui/icons";
import { Bar } from '../../Components';
// import { Link } from 'react-router-dom';

class Goodbye extends React.Component {
	
  
	render() {
	  return (
		<div>
			<Bar goodbye={true} landing={false} hello={false}/>
            <p>Goodbye!</p>
		</div>
	  );
	}
  }
  
export default Goodbye;