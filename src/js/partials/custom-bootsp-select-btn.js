import callback__changeMonth from './callback--change-month';

const setBtnEventToSwitchMonth = (el, monthData, chartOptionsObj_arr) => {
    el.addEventListener("click", () => {
        callback__changeMonth(monthData, chartOptionsObj_arr);
    });
};

export default setBtnEventToSwitchMonth;