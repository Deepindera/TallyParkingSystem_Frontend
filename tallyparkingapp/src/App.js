import React, { Component } from 'react';

import './App.css';
import Layout from './components/Layout/Layout';
import ParkingFeeCalculator from './containers/ParkingFeeCalculator/ParkingFeeCalculator';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Layout>
        <ParkingFeeCalculator/>
      </Layout>
      </div>      
    );
  }
}

export default App;