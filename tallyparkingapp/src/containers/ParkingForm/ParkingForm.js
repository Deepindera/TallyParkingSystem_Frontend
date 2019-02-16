import React, {Component} from 'react';
import DatePicker from '../../components/DatePicker/DatePicker';
import TimePicker from '../../components/TimePicker/TimePicker';
import TextField from '@material-ui/core/TextField';
import classes from './ParkingForm.module.css';
import * as properties from '../PropertyNames';
import Button from '@material-ui/core/Button';

class ParkingForm extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitClicked = this.submitClicked.bind(this);
        this.submitButtonDisabled = this.submitButtonDisabled.bind(this);
      }
    
    submitButtonDisabled = ()=>{
        return !this.props.selectedEntryDate || !this.props.selectedEntryTime || !this.props.selectedExitDate || !this.props.selectedExitTime || !this.props.selectedVehicleRegistrationNo; 
    }  

    handleChange = name => value => {                    
        this.props.handleChange(name, value.target ? value.target.value: value);
      };

      submitClicked = event => {                    
        this.props.submitClicked(this.props.selectedEntryDate,this.props.selectedEntryTime,this.props.selectedExitDate, this.props.selectedExitTime,this.props.selectedVehicleRegistrationNo);
        event.preventDefault();
      };
      
 render() {
        return (
            
        <div>
            <fieldset>
                <legend>Entry Details  </legend>
                <DatePicker required={true} label="Entry Date" selectedDate={this.props.selectedEntryDate} handleDateChange={this.handleChange(properties.EntryDate)}></DatePicker> &nbsp;
                <TimePicker required={true} label="Entry Time" selectedTime={this.props.selectedEntryTime} handleTimeChange={this.handleChange(properties.EntryTime)}></TimePicker>
            </fieldset>
            <fieldset>
                <legend>Exit Details</legend>
                <DatePicker required={true}  label="Exit Date" selectedDate={this.props.selectedExitDate} handleDateChange={this.handleChange(properties.ExitDate)}></DatePicker> &nbsp;
                <TimePicker required={true}  label="Exit Time" selectedTime={this.props.selectedExitTime} handleTimeChange={this.handleChange(properties.ExitTime)}></TimePicker>
            </fieldset>
            <fieldset>
                <legend>Vehicle Details</legend> 
                <TextField id="outlined-editToDO" type="text" required={true}  label="Vehicle Rego No"  defaultValue={this.props.selectedVehicleRegistrationNo} 
                 onChange={this.handleChange(properties.VehicleRegistrationNo)} 
                 />                                             
            </fieldset>
            <br></br>
            <Button variant="contained" disabled={this.submitButtonDisabled()} className={classes.button} color="primary" onClick={this.submitClicked}> Calculate Parking Fee </Button>   
        </div>
       
        

         
    )}
}

export default ParkingForm;