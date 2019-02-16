import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import React from 'react';
import { MuiPickersUtilsProvider, TimePicker } from 'material-ui-pickers';  

const timepicker = (props)=>(    
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <TimePicker
            margin="normal"
            required={props.required}
            label={props.label}
            value={props.selectedTime}
            onChange={props.handleTimeChange}
    />
  </MuiPickersUtilsProvider>
);

export default timepicker;