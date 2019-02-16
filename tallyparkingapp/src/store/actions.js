import {calculateParkingFeeRequest} from '../api/calculateParkingFeeRequest';
import * as utilities from '../utility';

export const PARKINGFEE_CALCULATED = 'PARKINGFEE_CALCULATED';

export const UPDATE_PARKINGSTATE = 'UPDATE_PARKINGSTATE';
export const updateParkingState = (name, val) => {
    return {type: UPDATE_PARKINGSTATE, name: name, value: val}
};

export const ERROR_API = 'ERROR_API';
export const errorHappened = (error) => {
    return {type: ERROR_API, error: error}
};


export const CALCULATE_PARKINGFEE = 'CALCULATE_PARKINGFEE';
export const calculateParkingFee = () => {
    return {type: CALCULATE_PARKINGFEE} 
};

export const calculateParkingFeeAsync = (entryDate, entryTime, exitDate, exitTime, vehicleRegistrationNo) => {
    return dispatch => {
        dispatch(calculateParkingFee());
        return   calculateParkingFeeRequest({
            entryTime: utilities.combineDateTime(entryDate, entryTime),
            exitTime: utilities.combineDateTime(exitDate, exitTime),
            registrationNo: vehicleRegistrationNo
        }).then(res => {
            if(res.error)
            {
                return dispatch({type:ERROR_API, value: utilities.parseErrorToString(res.data)});
            }
            else
            {
                return dispatch({
                    type: PARKINGFEE_CALCULATED,
                    value: res.data
                });
            }
           
        })
      }
};



