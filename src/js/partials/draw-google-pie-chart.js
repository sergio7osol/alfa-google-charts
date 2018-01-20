import googlePieChart from './google-pie-chart';

const drawGooglePieChart = (el, paiedCb, computedCb) => {
    const optionsPie = {
        container_el: el,
        chart_arr: [
            ['Cashback за все время', '%'],
            ['Выплаченный', paiedCb],
            ['Рассчитанный', computedCb]
        ],
        chartOptions: {
            title: 'Cashback за все время',
            width: 500,
            height: 300,
            colors: ['#058bc9', '#50b334'],
            is3D: true,
            tooltip: {
                text: "value"
            }
        }
    }
    googlePieChart(optionsPie);
};

export default drawGooglePieChart;