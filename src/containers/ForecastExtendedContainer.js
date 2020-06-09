import React, { Component } from 'react'
import ForecastExtended from './../components/ForecastExtended';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ForecastExtendedContainer extends Component {
    static propTypes = {
        city: PropTypes.string.isRequired,
    }

    render() {
        return (
            this.props.city &&
            <ForecastExtended city={this.props.city} />
        )
    }
}

//Destructuring state
const mapStateToProps = ({ city }) => ({ city });

export default connect(mapStateToProps, null)(ForecastExtendedContainer);
