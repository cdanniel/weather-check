import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyAppBar from '../components/AppBar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../assets/logo.png';
import { Button } from '@material-ui/core';
import axios from 'axios';
import WeatherInfo from '../components/WeatherInfo';

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
    position: 'fixed',
    top: 0,
    width: '100%',
  },
}));

const options = ['León', 'Madrid', 'Sevilla', 'Barcelona', 'Bilbao'];

function HomePage() {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [showModal, setShowModal] = useState(false); // estado para controlar visibilidad de ventana emergente

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0adeb47bff37ca9089cfe5df84b6399&units=metric`
      );
      setWeather(response.data);
      setShowModal(true); // mostrar ventana emergente cuando se obtienen los datos
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <MyAppBar className={classes.appBar}/>
      <img src={logo} alt="Imagen" className={classes.image} />
      <Autocomplete
        options={options}
        onChange={(event, value) => setCity(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Buscar..."
            variant="outlined"
            className={classes.search}
          />
        )}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Buscar
      </Button>
      {weather && (
        <div>
          <p>{weather.name}</p>
          <p>{weather.main.temp} °C</p>
        </div>
      )}
      {showModal && <WeatherInfo open={true} weather={weather} onClose={() => setShowModal(false)} />} 
    </div>
  );
}

export default HomePage;
