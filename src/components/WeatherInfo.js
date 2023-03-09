import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 300,
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  icon: {
    width: 100,
    marginLeft: 48,
  },
  temperature: {
    fontSize: '2rem',
    gridColumn: '2 / span 1',
    justifySelf: 'end',
    marginBottom: theme.spacing(2),
    frontWeight: 'bold',
    marginTop: 26,
    marginLeft: 13,
  },
  title: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
    textAlign: 'center',
  },
  temperatureMinMax: {
    textAlign: 'center',
    marginBottom: theme.spacing(2),
  },
  windHumidity: {
    textAlign: 'center',
  },
  weatherDescription: {
    textAlign: 'center',
    marginBottom: theme.spacing(2.5),
  },
}));

function WeatherInfo({ open, onClose, weather }) {
  const classes = useStyles();

  const getWeatherIconUrl = (iconCode) =>
    `https://openweathermap.org/img/w/${iconCode}.png`;

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div>
      <Modal
        className={classes.modal}
        open={open}
        onClose={onClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <Grid container rowSpacing={1} columns={2} columnSpacing={{ xs: 1, sm: 2, md: 0 }}>
            <Grid xs={12}>
              <Typography variant="h4" className={classes.title}>
                {capitalizeFirstLetter(weather.name)}, {weather.sys.country}
              </Typography>
            </Grid>
            <Grid xs={6}>
              <img
                className={classes.icon}
                src={getWeatherIconUrl(weather.weather[0].icon)}
                alt={weather.weather[0].description}
              />
            </Grid>
            <Grid xs={6}>
              <Typography variant="h2" className={classes.temperature}>
                {Math.round(weather.main.temp)}°C
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="body1" className={classes.weatherDescription}>
                {capitalizeFirstLetter(weather.weather[0].description)}
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="body1" className={classes.temperatureMinMax}>
                Max: {Math.round(weather.main.temp_max)}°C / Min:{' '}
                {Math.round(weather.main.temp_min)}°C
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="body1" className={classes.windHumidity}>
                Wind: {weather.wind.speed} km/h | Humidity: {weather.main.humidity}%
              </Typography>
            </Grid>
          </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default WeatherInfo;
