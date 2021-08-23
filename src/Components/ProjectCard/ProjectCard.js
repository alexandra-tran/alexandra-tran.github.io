import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={props.imgDest}
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          {props.date}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={props.link}>
          View project
        </Button>
        {props.collab &&
            <div styles='display: inline-block'>
                <Button href='https://alexanderxuchen.com' size="small" color="primary">
                <Avatar styles='display: inline-block' href='alexanderxuchen.com'>AC</Avatar>
        </Button>
        <Button href='https://zhengalbert.com' size="small" color="primary">
                <Avatar styles='display: inline-block' >AZ</Avatar>
        </Button>
        <Button size="small" color="primary" href={props.link}>
                <Avatar styles='display: inline-block' >TI</Avatar>
        </Button>
            </div>
        }
      </CardActions>
    </Card>
  );
}
