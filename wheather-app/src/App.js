import React, { Component } from 'react';
import './App.css';
import LocationList from './components/LocationList';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import ForecastExtended from './components/ForecastExtended';



const cities = [
  'Buenos Aires,ar',
  'New York,us',
  'Madrid,es',
  'Lima,pe',
  'Brighton,uk'
];

class App extends Component {

  constructor() {
    super();

      this.state = { city: null, };
  }

  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);
  }

  render() {
    const { city } = this.state;
    return (

      <Grid className="App">
        <Row>
          <AppBar position="sticky">
            <Toolbar>
              <Typography variant="title" color="inherit">
                Weather App  
              </Typography>  
            </Toolbar>
          </AppBar>

        </Row>
        <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities} 
                onSelectedLocation={this.handleSelectedLocation}
              />
            </Col>
            <Col xs={12} md={6}>
              <Paper>
                <div className="details">
                  {
                    city === null ? 
                    <h2 className="forecast-title">Location not selected</h2> : 
                    <ForecastExtended city={city}/>
                  }
                </div>
              </Paper>
            </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
