import * as actionTypes from './actions';
import * as dataStructure from '../prototypeData';
import * as propertyNames from '../containers/PropertyNames';
import {openSnackbar} from '../containers/Notifier/Notifier';
import * as utilities from '../utility'

const initialState = Object.assign({}, dataStructure);     
    
const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.CALCULATE_PARKINGFEE:
            return  {
                ...state
            }  
        case actionTypes.PARKINGFEE_CALCULATED:
            return  parkingFeeCalculated(state, action);                            
        case actionTypes.UPDATE_PARKINGSTATE:
            return  updateParkingState(state, action);     
        case actionTypes.ERROR_API:
              showError(state, action);
              return state;                
        default:
            return state;    
        };               
};


const parkingFeeCalculated = (state, action) =>{
    return {
        ...state,
        rateName: action.value.rateName,
        rateType: action.value.rateType,
        amount: action.value.amount,
        entryDate: utilities.isoStringToDate(action.value.entryTime),
        entryTime: utilities.isoStringToDate(action.value.entryTime),
        exitDate: utilities.isoStringToDate(action.value.exitTime),
        exitTime: utilities.isoStringToDate(action.value.exitTime),
        vehicleRegistrationNo: action.value.registrationNo,
        calculated: true       
    }
}
   
const updateParkingState= (state, action)=>{        

    switch (action.name){
        case propertyNames.EntryDate:
        return {
            ...state,
            entryDate: action.value,
            calculated: false
        };
        case propertyNames.EntryTime:
        return {
            ...state,
            entryTime: action.value,
            calculated: false
        };
        case propertyNames.ExitDate:
            return {
                ...state,
                exitDate: action.value,
                calculated: false
            };
        case propertyNames.ExitTime:
        return {
            ...state,
            exitTime: action.value,
            calculated: false
        };
        case propertyNames.VehicleRegistrationNo:
        return {
            ...state,
            vehicleRegistrationNo: action.value,
            calculated: false
        };
        default:
            return state;    
    }; 

};

const showError = (state, action)=>{
    openSnackbar({ message: JSON.stringify(action.value) });
}
      

export default reducer;