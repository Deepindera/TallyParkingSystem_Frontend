import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';
import ParkingFeeCalculator from './containers/ParkingFeeCalculator/ParkingFeeCalculator';
import Notifier from './containers/Notifier/Notifier';

configure({adapter: new Adapter()});

describe('App renders ParkingFeeCalculator', () => {
  it('should render ParkingFeeCalculator component', () =>{
      const wrapper = shallow(<App/>)        
      expect(wrapper.contains(<ParkingFeeCalculator/>)).toBeTruthy();
  });
});

describe('App renders Notifier', () => {
  it('should render Notifier component', () =>{
      const wrapper = shallow(<App/>)        
      expect(wrapper.contains(<Notifier/>)).toBeTruthy();
  });
});