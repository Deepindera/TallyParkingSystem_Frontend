import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import ParkingFeeCalculator from './containers/ParkingFeeCalculator/ParkingFeeCalculator';
import Notifier  from './containers/Notifier/Notifier';

class App extends Component {
  

  render() {
    return (
      <div className="App">
      <Layout>
        <ParkingFeeCalculator/>
        <Notifier />
      </Layout>
      </div>      
    );
  }
}

export default App;