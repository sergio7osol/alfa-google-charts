import $ from 'jquery';

import bootResponsTabs from 'bootstrap-responsive-tabs';
import callback__changeMonth from './partials/callback--change-month';
// import monthsData from './partials/data-months.json';
import monthsData from './partials/data/data-linear-graph.json';
import monthsData1 from './partials/data/data-linear-graph-1.json';
import dataPcbPie from './partials/data/data-pcb-pie.json';
import chartOptions from './partials/data/data-options-chart.json';
import setBtnEventToSwitchMonth from './partials/custom-bootsp-select-btn';
import axiosCustomUrl from './partials/axios-custom-url';
import drawGooglePieChart from './partials/draw-google-pie-chart';
import getPrevMonthEndDateTime from './partials/Date/get-prev-month-end-date-time';
import setMonthToEl from './partials/Date/set-month-rus-to-el';
import changeMonths from './partials/custom-change-months';

import style from '../scss/main.scss';

$('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm'] // xs, sm, md, lg 
});

const serverCurrentDate_str = document.querySelector(".ServerDateTime").textContent;
// set Months to 3 buttons for switching Months in Partner Cashback
const pCcurrMonth_date = setMonthToEl(document.querySelector("#p-current-month .month-btn-bl__label"), new Date(serverCurrentDate_str));
let pPrevMonth_date = getPrevMonthEndDateTime(pCcurrMonth_date);
const pSecToLastMonth_date = setMonthToEl(document.querySelector("#p-second-to-last-month .month-btn-bl__label"), pPrevMonth_date);
pPrevMonth_date = getPrevMonthEndDateTime(pSecToLastMonth_date);
setMonthToEl(document.querySelector("#p-third-to-last-month-bl .month-btn-bl__label"), pPrevMonth_date);
// set Months to 3 buttons for switching Months in Reverse Cashback
const rCurrMonth_date = setMonthToEl(document.querySelector("#r-current-month .month-btn-bl__label"), new Date(serverCurrentDate_str));
let rPrevMonth_date = getPrevMonthEndDateTime(rCurrMonth_date);
const rSecToLastMonth_date = setMonthToEl(document.querySelector("#r-second-to-last-month .month-btn-bl__label"), rPrevMonth_date);
rPrevMonth_date = getPrevMonthEndDateTime(rSecToLastMonth_date);
setMonthToEl(document.querySelector("#r-third-to-last-month-bl .month-btn-bl__label"), rPrevMonth_date);


// Google Area Chart
callback__changeMonth(monthsData, chartOptions);
drawGooglePieChart(document.getElementById('cashback-all-time'), dataPcbPie.Value.FullPaidCashbackSum, dataPcbPie.Value.FullCalculatedCashbackSum);

// Switching months by clicking on .bootsp-select-btn buttons
changeMonths("options", (ctrl_el) => {
    const label_el = ctrl_el.nextElementSibling;
    console.log("label_el: ", label_el);
    if (label_el.getAttribute("data-month-max-date") === "2018-01-12") {
        callback__changeMonth(monthsData, chartOptions);
        console.log("<!-- data-month-max-date --!>");
    } else {
        callback__changeMonth(monthsData1, chartOptions);
        console.log("NOT <!-- data-month-max-date --!> NOT");
    }
});

axiosCustomUrl('https://weather.cit.api.here.com/weather/1.0/report.json');
