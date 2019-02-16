import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';  

const datepicker = (props)=>(    
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <DatePicker
            margin="normal"
            required={props.required}
            label={props.label}
            value={props.selectedDate}
            onChange={props.handleDateChange}
     />
  </MuiPickersUtilsProvider>
);

export default datepicker;