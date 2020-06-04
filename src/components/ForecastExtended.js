import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

/*
const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes'
];

const data = {
    temperature: 19,
    humidity: 10,
    weatherState: 'sun',
    wind: '10'
};*/

const api_key = '5b782212ca4cdc307e9da4b84fc82095';
const url = 'http://api.openweathermap.org/data/2.5/forecast';

export default class ForecastExtended extends Component {

    constructor() {
        super();
        this.state = {
            forecastData: null
        }
    }

    componentDidMount() {

    }

    renderForecastItemDays() {
        return 'Render item';
        //return days.map( day => <ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>)
    }

    renderProgress() {
        return "Cargando Pronóstico extendido";
    }

    render() {
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronostico Extendido para {city}</h2>
                {forecastData 
                    ? this.renderForecastItemDays()
                    : this.renderProgress()}
            </div>
        )
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}
