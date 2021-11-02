import React from 'react';
import './Projects.css';
import brightest from '../../res/brightest.png';
import achievementhub from '../../res/AchievementHubLogoPart.png';
import recordlingLogo from '../../res/recordLing_logo.png'
import { Bar, ProjectCard } from '../../Components';

class Projects extends React.Component {
	render() {
	  return (
		<div>
         <p className="someText">past projects.</p>
		<Bar hello={false} landing={false} goodbye={false} projects={true}/>
        <div className='projDiv'>
        <ProjectCard link='https://github.com/alexandra-tran/language-documenter' className='card' collab={false} title='RecordLing' description='A mobile app used to preserve languages via speech segmentation' imgDest={recordlingLogo} date='June 2021'/>
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