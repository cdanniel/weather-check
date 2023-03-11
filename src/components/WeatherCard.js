import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import WeatherInfo from '../components/WeatherInfo';
import { CardActionArea } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    width: 400,
    marginTop: theme.spacing(2),
    backgroundColor: '#f5f5ed',
  },
  media: {
    width: 100,
  },
}));

function WeatherCard({ weather }) {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false); // estado para controlar visibilidad de ventana emergente

  const showModalOnClick = () => setShowModal(true);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getWeatherIconUrl = (iconCode) =>
    `https://openweathermap.org/img/w/${iconCode}.png`;

  return (
    <div>
    <Card className={classes.card} onClick={showModalOnClick}>
        <CardMedia className={classes.media} image={getWeatherIconUrl(weather.weather[0].icon)} title="Weather Icon" />
        <CardActionArea>
            <CardContent>
                <Typography variant="h4" component="h2">
                    {capitalizeFirstLetter(weather.name)}, {weather.sys.country}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
    {showModal && <WeatherInfo open={true} weather={weather} onClose={() => setShowModal(false)} />}
    </div>

  );
}

export default WeatherCard;
