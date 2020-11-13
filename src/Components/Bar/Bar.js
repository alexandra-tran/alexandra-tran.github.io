import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link } from '@material-ui/core/';
import { AppBar, Toolbar, Typography, Button }  from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	root: {
	  flexGrow: 1,
	},
	menuButton: {
	  marginRight: theme.spacing(1),
	},
	title: {
	  flexGrow: 1,
	},
	text: {
		color: '#474a6e',
	},
	buttonText: {
		color: '#474a6e',
	}
  }));

export default function Bar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="fixed" style={{ background: '#a8c5ff' }}>
        <Toolbar>
          <Typography href="./" className={classes.text} variant="h6"><Link underline='none' href="./" color="inherit">e.t.</Link></Typography>
		  {props.landing && (
			  <Grid container justify="flex-end">
			  <Button href="./Hello" className={classes.buttonText}>Hello</Button>
			 <Button href="./Goodbye" className={classes.buttonText}>Goodbye</Button>
		   </Grid>
		  )}
		  {props.hello && (
			  <Grid container justify="flex-end">
			  <Button href="./Hello" className={classes.buttonText}><u>Hello</u></Button>
			 <Button href="./Goodbye" className={classes.buttonText}>Goodbye</Button>
		   </Grid>
		  )}
		  {props.goodbye && (
			  <Grid container justify="flex-end">
			  <Button href="./Hello" className={classes.buttonText}>Hello</Button>
			 <Button href="./Goodbye" className={classes.buttonText}><u>Goodbye</u></Button>
		   </Grid>
		  )}
        </Toolbar>
      </AppBar>
    </div>
  );
}