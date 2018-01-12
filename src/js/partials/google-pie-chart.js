import { GoogleCharts } from 'google-charts';

// options exapmle = {
//     container_el: DOM element,
//     chart_arr: [
//         ['Title', 'value'],
//         ['Some title', some value],...
//     ],
//     chartOptions: {
//         title: ... ,
//         width: ... ,
//         height: .. ,
//         colors: arr, // array for each part of the chart
//         is3D: true // Making a 3D Pie Chart
//     }, ...
// }

let drawGooglePieChart = (options_obj) => {
    //Load the charts library with a callback
    GoogleCharts.load(drawChart);

    function drawChart() {
        // Standard google charts functionality is available as GoogleCharts.api after load
        const data = GoogleCharts.api.visualization.arrayToDataTable(options_obj.chart_arr);
        const pie_1_chart = new GoogleCharts.api.visualization.PieChart(options_obj.container_el);
        pie_1_chart.draw(data, options_obj.chartOptions);
    }
}

export default drawGooglePieChart;
