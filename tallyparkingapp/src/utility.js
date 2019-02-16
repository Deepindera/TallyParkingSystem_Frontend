export const combineDateTime = (date, time) =>  date === null || date === ''  ? null : new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(),time.getSeconds()).toJSON();
export const ToDateTimeString = (date) =>  date === null || date === undefined  ? null : date.toDateString() + " " + date.toLocaleTimeString().replace(/:\d{2}\s/,' ');
export const isoStringToDate = (date) =>  date === null || date === ''  ? null : new Date(date);

export const parseErrorToString = (errors) => {
    var errorMsg = '';
    var keys = Object.keys(errors);
    for (var j=0; j<keys.length; j++) {
        errorMsg = errorMsg + errors[keys[j]] +", ";
    }

    return errorMsg;
} 