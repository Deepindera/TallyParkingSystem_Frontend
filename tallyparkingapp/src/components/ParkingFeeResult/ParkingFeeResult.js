import React from 'react';
import classes from './ParkingFeeResult.module.css';

const parkingfeeresult = (props) => (
<div>
 <fieldset>
  <legend>Parking Fee</legend>
  {
      props.calculated ?
      <div>
    <h3>{props.rateName} ({props.rateType})</h3>
  <p className={classes.news}>Good News :) There is a spot available</p>  
      <table><tbody>
          <tr><td>Entry Time</td><td>{props.entryTime}</td></tr>                                    
          <tr><td>Exit Time</td><td>{props.exitTime}</td></tr>                             
          <tr><td>Vehicle No</td><td>{props.vehicleRegistrationNo}</td></tr>   
          <tr className={classes.feeRow}><td>Your Fee </td><td>$ {props.amount}</td></tr>                                                               
          </tbody></table>
      <p className={classes.terms}>
    <span>Terms and Conditions</span>
      Please ensure that you have selected your entry and exit times correctly. You must enter and exit within your pre-booked period.
      </p>  
  </div>
  : 
  <h4>Your Parking Fee will be shown here once calculated</h4>
  }
  
  </fieldset> 
</div>
);

export default parkingfeeresult;