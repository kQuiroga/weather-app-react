import React from 'react';
import PropTypes from 'prop-types'
import Weatherdata from './../WeatherLocation/WeatherData';

const ForecastItem = ({ weekDay, hour, data }) => (
    <div>
        <h2>{weekDay} - {hour} hs</h2>
        <Weatherdata data={data}></Weatherdata>
    </div>
);

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
    }),
}

export default ForecastItem;