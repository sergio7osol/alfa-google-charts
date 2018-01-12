import getMonthNameRusByNumber from './get-month-name-rus-by-index';

const getMonthNameRusByXxxxXxXxStr = (date_obj) => {
    const month = date_obj.getMonth();
    const monthRus = getMonthNameRusByNumber(month);
    return monthRus;
};

export default getMonthNameRusByXxxxXxXxStr;