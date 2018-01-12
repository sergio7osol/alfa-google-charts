import { GoogleCharts } from 'google-charts';

   // EXAMPLE:
// options exapmle = {
//     container_el: DOM element,
//     chart_arr: [
//         ['x axis'name, '1 graph name', '2 graph name'...],
//         ['length of x axis', '1st graph's val -> for this length', '2st graph's val -> for this length'],...
//     ],
//     chartOptions: {
//         title: 'Y-axis' name' ,
//         hAxis: { 
//              title: 'X-axis' name',  
//              titleTextStyle: {
//                  color: '#333'
//              }
//          },
//          vAxis: {
//              minValue: 0
//          }
//     }, ...
// }

const googleAreaChart = (options_obj) => {
    GoogleCharts.load(drawChart);
    
    function drawChart() {
      const data = GoogleCharts.api.visualization.arrayToDataTable(options_obj.chart_arr);
      const chart = new GoogleCharts.api.visualization.AreaChart(document.querySelector(options_obj.container_el));
      chart.draw(data, options_obj.chartOptions);
    }
}

export default googleAreaChart;