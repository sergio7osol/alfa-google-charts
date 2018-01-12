import formatToDayValArray from './format-to-day-val-array';

const makeDataArrForGoogleChart = (data, oneChartOptions) => {
    let graphType = oneChartOptions.GraphType;
    const data_arr = data.Value;
    let index = null;
    for (let i = 0; i < data_arr.length; i++) {
        let res = data_arr[i].GraphType === graphType;
        if (res) {
            index = i;
            break;
        }
    }
    const monthsDays_arr = formatToDayValArray(data_arr[index].Data);
    monthsDays_arr.unshift(oneChartOptions.chart_arr[0]);
    oneChartOptions.chart_arr = monthsDays_arr;

    return oneChartOptions;
};

export default makeDataArrForGoogleChart;