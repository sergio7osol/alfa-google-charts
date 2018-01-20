import drawAreaChart from './draw-area-chart';

const changeMonthLinearGraphs = (data, optionsObj_arr, cb_fn) => {
    for (let i = 0; i < optionsObj_arr.length; i++) {
        drawAreaChart(data, optionsObj_arr[i]);
    }
    if (cb_fn) {
        cb_fn();
    }
};

export default changeMonthLinearGraphs;