import drawAreaChart from './draw-area-chart';
import populateCbTables from './populate-cb-tables';
import dataPcbTables from './data/data-pcb-tables.json';

const changeMonth = (data, optionsObj_arr) => {
    for (let i = 0; i < optionsObj_arr.length; i++) {
        drawAreaChart(data, optionsObj_arr[i]);
    }
    // populateCbTables(dataPcbTables);
};

export default changeMonth;