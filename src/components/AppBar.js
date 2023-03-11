import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#d6eaf8', 
    alignItems: 'center',
    width: '100%',
    height: 70,
  },
  logo: {
    width: 350,
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="relative" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logoContainer}>
          <img src={logo} alt="Imagen" className={classes.logo} />
        </div>
      </Toolbar>
    </AppBar>
  );
} 

export default Header;
