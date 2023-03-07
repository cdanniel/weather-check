import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyAppBar from '../components/AppBar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../assets/logo.png';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  },
  search: {
    width: 500,
    marginBottom: theme.spacing(4),
  },
  appBar: {
    position: 'fixed', // fijar la posición de la AppBar
    top: 0, // establecer el borde superior de la AppBar en la parte superior de la página
    width: '100%', // establecer el ancho de la AppBar en el 100% de la página
  },
}));

const options = ['León', 'Madrid', 'Sevilla', 'Barcelona', 'Bilbao'];

function HomePage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MyAppBar className={classes.appBar}/>
      <img src={logo} alt="Imagen" className={classes.image} />
      <Autocomplete
        options={options}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar..."
            variant="outlined"
            className={classes.search}
          />
        )}
      />
      <Button variant="contained" color="primary">
        Buscar
      </Button>
    </div>
  );
}

export default HomePage;
