import googleAreaChart from './google-area-chart';
import makeDataArrForGoogleChart from './make-data-arr-for-google-chart';

const drawAreaChart = (data, oneOptions_obj) => {
    // data for graphs&table
    try {
        googleAreaChart(makeDataArrForGoogleChart(data, oneOptions_obj));
     }
     catch (e) {
        // statements to handle any exceptions
        console.log("Error in function drawAreaChart: ", e); // pass exception object to error handler
     }
};

export default drawAreaChart;