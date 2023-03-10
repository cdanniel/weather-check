import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyAppBar from '../components/AppBar';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import logo from '../assets/logo2.png';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import WeatherInfo from '../components/WeatherInfo';
import WeatherCard from '../components/WeatherCard';
import Typography from '@material-ui/core/Typography';

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
  derecha: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
  },
  izquierda: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
  },

}));

const options = ['León,es', 'Madrid', 'Sevilla', 'Barcelona', 'Bilbao', 'Gijón'];

function HomePage() {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [showModal, setShowModal] = useState(false); // estado para controlar visibilidad de ventana emergente

  const handleSearch = async () => {
    console.log("antes", cities);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0adeb47bff37ca9089cfe5df84b6399&units=metric`
      );
      setWeather(response.data);
      console.log(response.data);
      setShowModal(true); // mostrar ventana emergente cuando se obtienen los datos
      
      // Guardar el tiempo obtenido en el historial
      if (!cities.includes(city)){
        setCities([{time: response.data.dt, weather: response.data}, ...cities.slice(0, 4)]);
      }
      
    } catch (error) {
      console.log(error);
    }
    console.log(cities);
  };

  return (
    <div className={classes.root}>
      <MyAppBar className={classes.appBar}/>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.izquierda}>
          <Typography variant="h4" component="h2">
            Historial de búsquedas
          </Typography>
          {cities.map(city => (
            <WeatherCard key={city.time} weather={city.weather}/>
          ))}
        </Grid>
        <Grid item xs={12} md={6} className={classes.derecha}>
          <Typography variant="h4" component="h2">
            Introduce una ciudad
          </Typography>
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
          {showModal && <WeatherInfo open={true} weather={weather} onClose={() => setShowModal(false)} />} 
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
