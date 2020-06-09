import React, { Component } from 'react'
import { connect } from 'react-redux';
import { setCity } from './../actions';
import PropTypes from 'prop-types';
import LocationList from './../components/LocationList';

class LocationListContainer extends Component {
    static propTypes = {
        setCity: PropTypes.func.isRequired,
    }

    handleSelectedLocation = city => {
        this.props.setCity(city);
      }  

    render() {
        return (
            <LocationList 
                cities={this.props.cities} 
                onSelectedLocation={this.handleSelectedLocation}> 
            </LocationList>
        )
    }
}

const mapDispatchToPropsActions = dispatch => ({
    setCity: value => dispatch(setCity(value)),
  });

export default connect(null, mapDispatchToPropsActions)(LocationListContainer);
