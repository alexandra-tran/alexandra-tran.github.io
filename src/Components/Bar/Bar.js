import React from 'react';
import { createMuiTheme,
	createStyles,
	withStyles,
	makeStyles,
	Theme,
	ThemeProvider,} from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu }  from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';


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

export default function Bar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ background: '#a8c5ff' }}>
        <Toolbar>
          <Typography className={classes.text} variant="h6">e.t.</Typography>
		  <Grid container justify="flex-end">
     		<Button className={classes.buttonText}>Hello</Button>
			<Button className={classes.buttonText}>Goodbye</Button>
		  </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}