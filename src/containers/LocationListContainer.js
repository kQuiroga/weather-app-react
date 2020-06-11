import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions  from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    static propTypes = {
        setSelectedCity: PropTypes.func.isRequired,
        setWeather: PropTypes.func.isRequired,
        cities: PropTypes.func.isRequired,
        citiesWeather: PropTypes.array,
        city: PropTypes.string.isRequired,
    }

    componentDidMount() {
        const { setWeather, setSelectedCity, cities, city} = this.props;

        setWeather(cities);
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }  

    render() {
        return (
            <LocationList 
                cities={this.props.citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation}> 
            </LocationList>
        )
    }
}

/*const mapDispatchToProps = dispatch => ({
    setCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});*/

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(LocationListContainer);
