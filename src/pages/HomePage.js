import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import logo2 from '../assets/logo2.png';
import logo from '../assets/logo.png';
import { Button, Grid } from '@material-ui/core';
import axios from 'axios';
import WeatherInfo from '../components/WeatherInfo';
import WeatherCard from '../components/WeatherCard';
import Typography from '@material-ui/core/Typography';
import backgroundImage from '../assets/fondoWeb.jpg';
import Snackbar from '@material-ui/core/Snackbar';
import { CheckCircleOutline } from '@material-ui/icons';
import Footer from '../components/Footer';
import { API_KEY } from '../config';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    margin: 0,
    padding: 0,
    maxWidth: '100vw', //#e2e7e3
    overflowX: 'hidden', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${backgroundImage})`, 
    backgroundSize: 'cover', 
    backgroundPosition: "center",
    height: '100vh', 
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
    top: -100,
    width: 520
  },
  derecha: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 220,
  },
  izquierda: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 220,
  },
  boton: {
    backgroundColor: '#1078bb',
    width: 100,
    height: 40,
  },
  snackbar: {
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: 130,
    fontSize: '1.2rem',
    padding: '1rem 2rem',
  }
}));

function HomePage() {
  const classes = useStyles();
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [cities, setCities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleSearch = async () => {

    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=es`
      );
      setWeather(response.data);
      setShowModal(true);
      setOpenSnackbar(true);
      
      const newCity = {
        time: response.data.dt,
        weather: response.data
      };
      if (!cities.some(city => city.weather.name === newCity.weather.name)) {
        if (cities.length === 5) {
          cities.pop();
        } 
        setCities(prevCities => [newCity, ...prevCities]);
      }

      
    } catch (error) {
      if (error.response && error.response.status === 404) {
        alert(`La ciudad ${city} no existe`);
      }
    }
  };

  return (
    <div className={classes.root}>
      <img src={logo} alt="Imagen" className={classes.appBar} />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} className={classes.izquierda}>
          <Typography variant="h4" component="h2">
            Historial de búsquedas
          </Typography>
          {cities.length === 0 ? (
            <Typography variant="subtitle1">
              No hay ciudades en el historial de búsquedas.
            </Typography>
          ) : (
            cities.map(city => (
              <WeatherCard key={city.time} weather={city.weather}/>
            ))
          )}
        </Grid>
        <Grid item xs={12} md={6} className={classes.derecha}>
          <Typography variant="h4" component="h2">
            Introduce una ciudad
          </Typography>
          <img src={logo2} alt="Imagen" className={classes.image} />
          <TextField
            label="Buscar..."
            variant="outlined"
            className={classes.search}
            value={city}
            onChange={(event) => setCity(event.target.value)}
          />        
          <Button className={classes.boton} variant="contained" color="primary" onClick={handleSearch}>
            Buscar
          </Button>
          {showModal && <WeatherInfo open={true} weather={weather} onClose={() => setShowModal(false)} />} 
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={3000} 
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <div className={classes.snackbar}>
          <CheckCircleOutline style={{ marginRight: '0.5rem'}} />
          <span>La solicitud se ha realizado correctamente.</span>
        </div>
      </Snackbar>
      <Footer />
    </div>
  );
}

export default HomePage;
