import React, { Component } from 'react'
import ForecastExtended from './../components/ForecastExtended';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getForecastDataFromCities, getCity } from './../reducers';

class ForecastExtendedContainer extends Component {
    static propTypes = {
        city: PropTypes.string.isRequired,
        forecastData: PropTypes.array.isRequired,
    }

    render() {
        const { city, forecastData } = this.props;
        return (
            city &&
            <ForecastExtended city={city} forecastData={forecastData} />
        )
    }
}

const mapStateToProps = state => ({ city: getCity(state), forecastData: getForecastDataFromCities(state) });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
