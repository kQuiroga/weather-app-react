import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
import LocationListContainer from './containers/LocationListContainer';
import './App.css';

const cities = [
  'Buenos Aires, ar',
  'Madrid, es',
  'A Coruña, es',
  'París, fr',
  'Lima, pe'
];

class App extends Component {

  render() {
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
                <LocationListContainer cities={cities}> 
                </LocationListContainer>
              </Col>
              <Col xs={12} md={6}>
                <Paper elevation={4}>
                  <div className='details'>
                    <ForecastExtendedContainer></ForecastExtendedContainer>
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

