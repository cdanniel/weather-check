import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import logo from '../assets/logo.png';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#d6eaf8', // Color azul
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
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

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
