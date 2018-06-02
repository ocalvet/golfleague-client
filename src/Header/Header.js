import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import styles from './HeaderStyles';

const Header = ({ classes, drawerOpen, handleDrawerOpen }) => {
  return (
    <AppBar
      className={classNames(classes.appBar, {
        [classes.appBarShift]: drawerOpen,
        [classes[`appBarShift-left`]]: drawerOpen,
      })}
    >
      <Toolbar disableGutters={!drawerOpen}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawerOpen()}
          className={classNames(classes.menuButton, drawerOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit" noWrap>
          NCCI Golf League
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  handleDrawerOpen: PropTypes.func.isRequired,
}

export default withStyles(styles)(Header);