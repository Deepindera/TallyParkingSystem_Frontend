import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ParkingForm from '../ParkingForm/ParkingForm';
import ParkingFeeResult from '../../components/ParkingFeeResult/ParkingFeeResult';
import ParkingFeeCalculator from './ParkingFeeCalculator';

configure({adapter: new Adapter()});

describe('ParkingFeeCalculator renders ParkingForm', () => {
    it('should render ParkingForm', () =>{
        const wrapper = shallow(<ParkingFeeCalculator/>)        
        expect(wrapper.find(ParkingForm)).toBeDefined();
    }); 
});

describe('ParkingFeeCalculator renders ParkingFeeResult', () => {
    it('should render ParkingFeeResult', () =>{
        const wrapper = shallow(<ParkingFeeCalculator/>)        
        expect(wrapper.find(ParkingFeeResult)).toBeDefined();
    });
});
