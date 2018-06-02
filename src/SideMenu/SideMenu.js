import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import styles from './SideMenuStyles';

const SideMenu = ({ classes, theme, drawerOpen, handleDrawerClose, navigate }) => {
  return (
    <Drawer
      variant="persistent"
      open={drawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItem button onClick={() => navigate('/')}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText inset primary="Home" />
        </ListItem>
        <ListItem button onClick={() => navigate('/matches')}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText inset primary="Matches" />
        </ListItem>
        <ListItem button onClick={() => navigate('/standings')}>
          <ListItemIcon>
            <SupervisorAccountIcon />
          </ListItemIcon>
          <ListItemText inset primary="Standings" />
        </ListItem>
        <ListItem button onClick={() => navigate('/scores')}>
          <ListItemIcon>
            <RoomIcon />
          </ListItemIcon>
          <ListItemText inset primary="Scores" />
        </ListItem>
        <ListItem button onClick={() => navigate('/schedule')}>
          <ListItemIcon>
            <ScheduleIcon />
          </ListItemIcon>
          <ListItemText inset primary="Schedule" />
        </ListItem>
      </List>
    </Drawer>
  )
}

SideMenu.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerClose: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(SideMenu);
