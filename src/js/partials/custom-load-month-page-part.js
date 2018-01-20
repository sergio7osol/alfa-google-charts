import axiosCustomUrl from './axios-custom-url';
import changeMonthLinearGraphs from './custom-change-month-linear-graphs';
import populatePcbTables from './populate-pcb-tables';
import populateRcbTables from './populate-rcb-tables';

const loadMonthPagePart = (linearGraph_url, table_url, argType_num, chartOptions) => {
    linearGraph_url = `${linearGraph_url}/${argType_num}`;
    table_url = `${table_url}/${argType_num}`;
    if (argType_num == 1) { // linear graphs data request - Partner CB
        axiosCustomUrl(linearGraph_url, (currMonthsDataP) => {
            currMonthsDataP = currMonthsDataP.data.Value;
            changeMonthLinearGraphs(currMonthsDataP, chartOptions);
            console.log("Partner CB linear graphs DONE!");
        });
        axiosCustomUrl(table_url, (tableData) => {
            console.log("tableData 1: ", tableData.data);
            tableData = tableData.data;
            populatePcbTables(tableData);
            console.log("Partner CB table DONE!");
        });
    } else if (argType_num == 2) { // linear graphs data request - Reverse CB
        axiosCustomUrl(linearGraph_url, (currMonthsDataR) => {
            currMonthsDataR = currMonthsDataR.data.Value;
            changeMonthLinearGraphs(currMonthsDataR, chartOptions);
            console.log("Reverse CB linear graphs DONE!");
        });
        axiosCustomUrl(table_url, (tableData) => {
            console.log("tableData 2: ", tableData.data);
            tableData = tableData.data;
            populateRcbTables(tableData);
            console.log("Reverse CB table DONE!");
        });
    }
};

export default loadMonthPagePart;