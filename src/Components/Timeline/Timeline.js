import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import { Grid } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 15px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
      <Grid align-items='flex-start' justify='flex-start'>
    <Timeline align="alternate">
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2016
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" align='left'>
              april
            </Typography>
            <Typography align='left'>started playing women's field lacrosse in high school.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2017
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              april
            </Typography>
            <Typography>played rep for the first time.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2018
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary">
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" align='left'>
              march
            </Typography>
            <Typography align='left'>tried a different variation of lacrosse, called box lacrosse. i simply fell in love with it.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              june
            </Typography>
            <Typography>unfortunately, i encountered in multiple grave injuries which required intense rehabilitation for the rest of the year.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="secondary">
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1" align='left'>
              may
            </Typography>
            <Typography align='left'>knee arthroscopy surgery to fix my meniscus tear.</Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </Grid>
  );
}
