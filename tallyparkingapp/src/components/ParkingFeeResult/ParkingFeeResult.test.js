import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ParkingFeeResult from './ParkingFeeResult';


configure({adapter: new Adapter()});

describe('ParkingFeeResult renders <legend>Parking Fee</legend>', () => {
    it('should render ParkingForm', () =>{
        const wrapper = shallow(<ParkingFeeResult/>)        
        expect(wrapper.contains(<legend>Parking Fee</legend>)).toBeTruthy();
    });
});

describe('ParkingFeeResult renders parking properties properly', () => {
        
    it('should render rate properties', () =>{
        var rateName ='Test Rate';
        var rateType ='Test Rate Type';
        const wrapper = shallow(<ParkingFeeResult calculated={true} rateName={rateName} rateType={rateType}/>)        
        expect(wrapper.contains(<h3>{rateName} ({rateType})</h3>)).toBeTruthy();
    });

    it('should render vehicle registration', () =>{
        var vehicleRegistrationNo ='BMW 2322';       
        const wrapper = shallow(<ParkingFeeResult calculated={true} vehicleRegistrationNo={vehicleRegistrationNo}/>)        
        expect(wrapper.contains( <tr><td>Vehicle No</td><td>{vehicleRegistrationNo}</td></tr> )).toBeTruthy();
    });

    it('should render entry time', () =>{
        var entryTime ='21/2/2019 10:50';       
        const wrapper = shallow(<ParkingFeeResult calculated={true} entryTime={entryTime}/>)        
        expect(wrapper.contains(  <tr><td>Entry Time</td><td>{entryTime}</td></tr> )).toBeTruthy();
    });

    it('should render exit time', () =>{
        var exitTime ="21/2/2019 17:50";     
        const wrapper = shallow(<ParkingFeeResult calculated={true} exitTime={exitTime} />)             
        expect(wrapper.contains(<tr><td>Exit Time</td><td>{exitTime}</td></tr>)).toBeTruthy();
    });

    
    it('should render fee in special class', () =>{
        var amount = 100;     
        const wrapper = shallow(<ParkingFeeResult calculated={true} amount={amount}/>)        
        expect(wrapper.contains(<tr className="feeRow"><td>Your Fee </td><td>$ {amount}</td></tr>)).toBeTruthy(); 
    });
   
});

