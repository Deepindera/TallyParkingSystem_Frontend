import axios from 'axios'
import * as uri from './urls';

export const calculateParkingFeeRequest = (request) =>(
    axios.post(uri.CALCULATE_PARKINGFEE_URI,  request , {headers: {
      'Content-Type': 'application/json',          
    }})
    .then(res => {        
        return {
          error: false,
          data: res.data
        }  
      })
      .catch(function (error) {        
        return {
          error: true,
          data: error.response.data.errors
        }       
      })      
);