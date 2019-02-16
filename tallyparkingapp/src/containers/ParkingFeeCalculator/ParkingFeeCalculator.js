import React, {Component} from 'react';
import Wrapper from '../../hoc/Wrapper';
import ParkingForm from '../ParkingForm/ParkingForm'; 
import ParkingFeeResult from '../../components/ParkingFeeResult/ParkingFeeResult'; 
import classes from './ParkingFeeCalculator.module.css';
import {connect} from 'react-redux';
import * as dataStructure from '../../prototypeData'; 
import * as actionTypes from '../../store/actions';
import * as utilities from '../../utility';

class ParkingFeeCalculator extends Component {                 
    state = Object.assign({}, dataStructure);     
    render() {
        return (
            <Wrapper>
                <div className={classes.parkingform}>
                <ParkingForm 
                selectedEntryDate ={this.props.entryDate == null ? null : this.props.entryDate}
                selectedEntryTime ={this.props.entryTime == null ? null : this.props.entryTime}
                selectedExitDate ={this.props.exitDate == null ? null : this.props.exitDate}
                selectedExitTime ={this.props.exitTime == null ? null : this.props.exitTime}
                selectedVehicleRegistrationNo ={this.props.vehicleRegistrationNo === '' ? '' : this.props.vehicleRegistrationNo}
                handleChange={this.props.updateParking }
                submitClicked={this.props.calculateFee }
                >
                </ParkingForm> 
               
                </div>
                <div className={classes.parkingresult}>
                    <ParkingFeeResult 
                    entryTime={this.props.entryTime === null ? null : utilities.ToDateTimeString(this.props.entryTime)}
                    exitTime={this.props.exitTime === null ? null : utilities.ToDateTimeString(this.props.exitTime)}                   
                    amount={this.props.amount === null ? null : this.props.amount}                   
                    calculated={this.props.calculated === null ? null : this.props.calculated}                   
                    rateType={this.props.rateType === null ? null : this.props.rateType}                   
                    rateName={this.props.rateName === null ? null : this.props.rateName}                   
                    vehicleRegistrationNo={this.props.vehicleRegistrationNo === null ? '' : this.props.vehicleRegistrationNo}                          
                    ></ParkingFeeResult>
                </div>
            </Wrapper>
        )
    }
}

const mapStateToProps = state => {
    return {
        entryDate: state.entryDate,
        entryTime: state.entryTime,
        exitDate:state.exitDate,
        exitTime: state.exitTime,
        vehicleRegistrationNo: state.vehicleRegistrationNo,
        amount: state.amount,
        calculated: state.calculated,
        rateType: state.rateType,
        rateName: state.rateName        
    };
}

const mapDispatchToProps = dispatch => {
    return {
        updateParking: (name, value) => dispatch(actionTypes.updateParkingState(name, value)),
        calculateFee: (entryDate, entryTime, exitDate, exitTime, vehicleRegistrationNo) => dispatch(actionTypes.calculateParkingFeeAsync(entryDate, entryTime, exitDate, exitTime, vehicleRegistrationNo)) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingFeeCalculator);