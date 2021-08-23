import React from 'react';
import './Projects.css';
import brightest from '../../res/brightest.png';
import achievementhub from '../../res/AchievementHubLogoPart.png';
import { Bar, ProjectCard } from '../../Components';

class Projects extends React.Component {
	render() {
	  return (
		<div>
         <p className="someText">recent projects.</p>
		<Bar hello={false} landing={false} goodbye={false} projects={true}/>
        <p unselectable="on" className='proj'>proj.</p>
        <div className='projDiv'>
            <div className='innerDiv'>
            <ProjectCard link='https://gimmebuttons-js.herokuapp.com/' className='card' title='GimmeButtons.js' description='Javascript library that changes a button appearance upon click.' imgDest={brightest} date='Oct 2020 - Dec 2020'/>
            </div>
        <div className='innerDiv'>
        <ProjectCard className='card' collab={true} title='AchievementHub' description='A fullstack application that tracks gamer achievements across gaming platforms' imgDest={achievementhub} date='Oct 2020 - Dec 2020'/>
        </div>
        </div>

		</div>
	  );
	}
  }
  
export default Projects;