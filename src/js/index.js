import $ from 'jquery';

import bootResponsTabs from 'bootstrap-responsive-tabs';
// import changeMonthLinearGraphs from './partials/custom-change-month-linear-graphs';
// import populatePcbTables from './partials/populate-pcb-tables';
    // import populateRcbTables from './partials/populate-rcb-tables';
import chartOptionsP from './partials/data/data-options-chart-p.json';
import chartOptionsR from './partials/data/data-options-chart-r.json';
import getCheckedRadioEl from './partials/custom-get-checked-radio';
import loadMonthPagePart from './partials/custom-load-month-page-part';
import loadMonthPagePartOnCtrl from './partials/custom-load-month-page-part-on-ctrl';
import setSwitchingMonth from './partials/custom-set-switching-month';
import axios from 'axios';
import axiosCustomUrl from './partials/axios-custom-url';
import drawGooglePieChart from './partials/draw-google-pie-chart';
import getPrevMonthEndDateTime from './partials/Date/get-prev-month-end-date-time';
import setMonthToEl from './partials/Date/set-month-rus-to-el';

import style from '../scss/main.scss';

window.__global_hostPort_url = "http://localhost:3007" // "http://mlpos:9091";
window.__global_linearGraphPart_url = "api/Statistics/GetLinearGraphStatisticsData";
window.__global_tablePart_url = "api/Statistics/GetTableStatisticsData";
window.__global_piePart_url = "api/Statistics/GetPieChartStatisticsData";

$('.responsive-tabs').responsiveTabs({
    accordionOn: ['xs', 'sm'] // xs, sm, md, lg 
});
// data for setting Months to 3 buttons
const monthBtnsDOM_els = {
    partner: {
        currMonth: document.querySelector("#p-current-month .month-btn-bl__label"),
        secToLastMonth: document.querySelector("#p-second-to-last-month .month-btn-bl__label"),
        thirdToLastMonth: document.querySelector("#p-third-to-last-month-bl .month-btn-bl__label")
    },
    reverse: {
        currMonth: document.querySelector("#r-current-month .month-btn-bl__label"),
        secToLastMonth: document.querySelector("#r-second-to-last-month .month-btn-bl__label"),
        thirdToLastMonth: document.querySelector("#r-third-to-last-month-bl .month-btn-bl__label")
    }
};
const serverCurrentDate_str = document.querySelector(".ServerDateTime").textContent;
// set Months to 3 buttons for switching Months in Partner&Reverse Cashback
const currDate = new Date(serverCurrentDate_str);
const pCcurrMonth_date = setMonthToEl(monthBtnsDOM_els.partner.currMonth, currDate);
const rCurrMonth_date = setMonthToEl(monthBtnsDOM_els.reverse.currMonth, currDate);
let prevMonth_date = getPrevMonthEndDateTime(pCcurrMonth_date);
const pSecToLastMonth_date = setMonthToEl(monthBtnsDOM_els.partner.secToLastMonth, prevMonth_date);
const rSecToLastMonth_date = setMonthToEl(monthBtnsDOM_els.reverse.secToLastMonth, prevMonth_date);
prevMonth_date = getPrevMonthEndDateTime(pSecToLastMonth_date);
setMonthToEl(monthBtnsDOM_els.partner.thirdToLastMonth, prevMonth_date);
setMonthToEl(monthBtnsDOM_els.reverse.thirdToLastMonth, prevMonth_date);

// Google Area Chart
const currMonthDateP_str = monthBtnsDOM_els.partner.currMonth.getAttribute("data-month-max-date");
const currMonthDateR_str = currMonthDateP_str;
const secToLastMonthDateP_str = monthBtnsDOM_els.partner.secToLastMonth.getAttribute("data-month-max-date");
const thirdToLastMonthDateP_str = monthBtnsDOM_els.partner.thirdToLastMonth.getAttribute("data-month-max-date");
// init check & rendering of the selected month for Partner CB & Reverse CB
getCheckedRadioEl("p-options", loadMonthPagePartOnCtrl);
getCheckedRadioEl("r-options", loadMonthPagePartOnCtrl);

setSwitchingMonth("p-options");
setSwitchingMonth("r-options");

// pie chart data request
axiosCustomUrl(`${__global_hostPort_url}/${__global_piePart_url}/1`, (dataPcbPie) => {
    console.log("dataRcbPie 1: ", dataPcbPie);
    drawGooglePieChart(document.getElementById('p-cashback-all-time'), dataPcbPie.data.Value.FullPaidCashbackSum, dataPcbPie.data.Value.FullCalculatedCashbackSum);
});
axiosCustomUrl(`${__global_hostPort_url}/${__global_piePart_url}/2`, (dataRcbPie) => {
    console.log("dataRcbPie 2: ", dataRcbPie);
    drawGooglePieChart(document.getElementById('r-cashback-all-time'), dataRcbPie.data.Value.FullPaidCashbackSum, dataRcbPie.data.Value.FullCalculatedCashbackSum);
});