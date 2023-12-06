import React from 'react';
import './Projects.css';
import brightest from '../../res/brightest.png';
import achievementhub from '../../res/AchievementHubLogoPart.png';
import { Bar, ProjectCard } from '../../Components';

class Projects extends React.Component {
	render() {
	  return (
		<div>
         <p className="someText">past projects.</p>
		<Bar hello={false} landing={false} goodbye={false} projects={true}/>
        
        <div className="topicContainer">
		<div>
		<p className="paragraphText">was an undergraduate researcher at the <a className='textLink' href="http://www.josephjaywilliams.com/">Intelligent Adaptive Interventions Lab</a>. I liked learning and exploring the realm of computer science education research, human-computer interaction (HCI), and mental health.</p>
		</div>
		</div>
		</div>
	  );
	}
  }
  
export default Projects;