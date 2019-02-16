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

    it('should not  render placeholder text when calculated is false', () =>{        
        const wrapper = shallow(<ParkingFeeResult calculated={true}/>)        
        expect(wrapper.contains(<h4>Your Parking Fee will be shown here once calculated</h4>)).toBeFalsy(); 
    });
   
});

describe('ParkingFeeResult does not render parking properties when calculated flag is false', () => {
        
    it('should not render rate properties', () =>{
        var rateName ='Test Rate';
        var rateType ='Test Rate Type';
        const wrapper = shallow(<ParkingFeeResult calculated={false} rateName={rateName} rateType={rateType}/>)        
        expect(wrapper.contains(<h3>{rateName} ({rateType})</h3>)).toBeFalsy();
    });

    it('should not render vehicle registration', () =>{
        var vehicleRegistrationNo ='BMW 2322';       
        const wrapper = shallow(<ParkingFeeResult calculated={false} vehicleRegistrationNo={vehicleRegistrationNo}/>)        
        expect(wrapper.contains( <tr><td>Vehicle No</td><td>{vehicleRegistrationNo}</td></tr> )).toBeFalsy();
    });

    it('should not render entry time', () =>{
        var entryTime ='21/2/2019 10:50';       
        const wrapper = shallow(<ParkingFeeResult calculated={false} entryTime={entryTime}/>)        
        expect(wrapper.contains(  <tr><td>Entry Time</td><td>{entryTime}</td></tr> )).toBeFalsy();
    });

    it('should not render exit time', () =>{
        var exitTime ="21/2/2019 17:50";     
        const wrapper = shallow(<ParkingFeeResult calculated={false} exitTime={exitTime} />)             
        expect(wrapper.contains(<tr><td>Exit Time</td><td>{exitTime}</td></tr>)).toBeFalsy();
    });

    
    it('should not render fee in special class', () =>{
        var amount = 100;     
        const wrapper = shallow(<ParkingFeeResult calculated={false} amount={amount}/>)        
        expect(wrapper.contains(<tr className="feeRow"><td>Your Fee </td><td>$ {amount}</td></tr>)).toBeFalsy(); 
    });

    it('should  render placeholder text when calculated is false', () =>{        
        const wrapper = shallow(<ParkingFeeResult calculated={false}/>)        
        expect(wrapper.contains(<h4>Your Parking Fee will be shown here once calculated</h4>)).toBeTruthy(); 
    });
   
});