import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'transparent',
  },
  nested: {
    paddingLeft: theme.spacing.unit * 5,
  },
});

class NestedList extends React.Component {
  state = {
    open1: false,
    open2: false,
    open3: false,
    open4: true,
  };

  handleClick1 = () => {
    this.setState(state => ({ open1: !state.open1 }));
  };

  handleClick2 = () => {
    this.setState(state => ({ open2: !state.open2 }));
  };

  handleClick3 = () => {
    this.setState(state => ({ open3: !state.open3 }));
  };

  handleClick4 = () => {
    this.setState(state => ({ open4: !state.open4 }));
  };

  render() {
    const { classes } = this.props;

    return (
      <List
        component="nav"
        className={classes.root}
      >
        <ListItem button onClick={this.handleClick1}>
          <ListItemText inset primary="2016" />
          {this.state.open1 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText inset primary="Lorne Park (Women's Field Junior Team)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick2}>
          <ListItemText inset primary="2017" />
          {this.state.open2 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested} component='a' href='https://evolveelitelax.com/ontario/'>
              <ListItemText inset primary="Evolve Elite Lacrosse (Women's Field U19 Clinics)" />
            </ListItem>
            <ListItem button className={classes.nested} component='a' href='https://www.mimicolacrosse.com/about-us/history/'>
              <ListItemText inset primary="Mimico (Women's Field U19)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick3}>
          <ListItemText inset primary="2018" />
          {this.state.open3 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open3} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText inset primary="Lorne Park (Women's Field Senior Team)" />
            </ListItem>
            <ListItem className={classes.nested}>
            <ListItemText inset primary="Mimico (U19 Women's Field)" />
            </ListItem>
            <ListItem button className={classes.nested} component='a' href='https://www.mississauga.com/community-story/8859071-mississauga-tomahawks-intermediate-girls-win-provincial-c-lacrosse-gold/'>
            <ListItemText inset primary="Mississauga Tomahawks (Box Intermediate)" />
            </ListItem>
          </List>
        </Collapse>

        <ListItem button onClick={this.handleClick4}>
          <ListItemText inset primary="2019" />
          {this.state.open4 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open4} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem className={classes.nested}>
              <ListItemText inset primary="UofT Lacrosse Intramurals" />
            </ListItem>
            <ListItem className={classes.nested}>
            <ListItemText inset primary="UofT Varsity Blues (OUA Women's Field)" />
            </ListItem>
          </List>
        </Collapse>
      </List>
    );
  }
}

NestedList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);