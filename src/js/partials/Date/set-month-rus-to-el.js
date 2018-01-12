import getMonthNameRusByNumber from './get-month-name-rus-by-index';

const setMonthToEl = (month_el, endMonthDate_date) => {
    let monthName = getMonthNameRusByNumber(endMonthDate_date.getMonth());
    month_el.textContent = monthName;
    month_el.setAttribute("data-month-max-date", endMonthDate_date.toJSON().slice(0,10));
    
    // console.log("endMonthDate_date: ", endMonthDate_date);

    return endMonthDate_date;  
};

export default setMonthToEl;