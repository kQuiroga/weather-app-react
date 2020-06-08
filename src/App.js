import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import { createStore } from 'redux';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';
import { setCity } from './actions';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Madrid, es',
  'A Coruña, es',
  'París, fr',
  'Lima, pe'
];

const store = createStore(() => {}, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {

  constructor() {
    super();
    this.state = {
      city: null
    };
  }

  handleSelectedLocation = city => {
    this.setState({
      city
    });
    console.log(`handleSelectedLocation ${city}`);

    store.dispatch(setCity(city));
  }  
  
  render() {
    const { city } = this.state;
    return (
        <div className="App">
          <Grid>
            <Row>
              <AppBar position='sticky'>
                <Toolbar>
                  <Typography variant='h6'>
                    Weather App
                  </Typography>
                </Toolbar>
              </AppBar>
            </Row>
            <Row>
              <Col xs={12} md={6}>
                <LocationList 
                  cities={cities} 
                  onSelectedLocation={this.handleSelectedLocation}> 
                </LocationList>
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                  <div className='details'>
                    {city &&
                    <ForecastExtended city={city}></ForecastExtended>}
                  </div>
                </Paper>
              </Col>
            </Row>
          </Grid>
        </div>
    );
  };
}

export default App;
