import loadMonthPagePart from './custom-load-month-page-part';
import chartOptionsP from './data/data-options-chart-p.json';
import chartOptionsR from './data/data-options-chart-r.json';


const loadMonthPagePartOnCtrl = (ctrl_el) => {
    const labelDate_str = ctrl_el.nextElementSibling.getAttribute("data-month-max-date");
    const linearGraph_url = `${__global_hostPort_url}/${__global_linearGraphPart_url}/${labelDate_str}`;
    const table_url = `${__global_hostPort_url}/${__global_tablePart_url}/${labelDate_str}`;
    let type = null;
    const nameAttr = ctrl_el.getAttribute("name");
    if (nameAttr === "p-options") {
        type = 1;
        loadMonthPagePart(linearGraph_url, table_url, type, chartOptionsP);
    }  else if (nameAttr === "r-options") {
        type = 2;
        loadMonthPagePart(linearGraph_url, table_url, type, chartOptionsR);
    }
};

export default loadMonthPagePartOnCtrl;