const getPrevMonthEndDateTime = (currDateTime_date) => {
    // const monthStartDateTimePoint_date = new Date(currDateTime_date.getFullYear(), currDateTime_date.getMonth(), 1);
    console.log("Date - origin: ", currDateTime_date);
    currDateTime_date.setDate(1); // going to 1st of the month
    currDateTime_date.setHours(-1);
    // const prevMonthEndDateTime_date_time = (new Date().setDate(monthStartDateTimePoint_date.getDate()-1));
    // const prevMonthEndDateTime_date = new Date(prevMonthEndDateTime_date_time);
    console.log("Date - Day-1: ", currDateTime_date);

    return currDateTime_date;
};

export default getPrevMonthEndDateTime;