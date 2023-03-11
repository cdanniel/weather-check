import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    verticalAlign: 'bottom',
    position: 'fixed',
    bottom: 20,
  },
}));

function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography variant="subtitle1" align="center" color="black" component="p">
        Esta aplicación utiliza datos proporcionados por &nbsp;
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noreferrer"
          className={classes.link}
        >
           OpenWeather
        </a>
      </Typography>
      <Typography variant="body2" color="black" align="center">
        &copy; {new Date().getFullYear()} WeatherCheck
      </Typography>
    </footer>
  );
}

export default Footer;
