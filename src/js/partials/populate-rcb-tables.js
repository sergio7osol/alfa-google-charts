import populateEls from './populate-elements';

const populateRcbTables = (data) => {
    // data for graphs&table
    try {
        const month = data.Month;
        const clientCount = data.ClientsByMonthCount;
        const transCount = data.TransactionsByMonthCount;
        const transSum = data.TransactionByMonthSum;
        const balanceSum = data.BalanceByMonthSum;
        let accruedSum = data.AccruedCashbackByMonthSum;
        let debitedSum = data.DebitedCashbackByMonthSum;
    
        // Populate Monthly Total Table
        const populateTableMonthlyTotal_arr = [
            {
                id: "r-monthly-val", 
                value: month
            }, {
                id: "r-monthly-others-val",
                value: month
            }, {
                id: "r-monthly-total-clients",
                value: clientCount
            }, {
                id: "r-monthly-total-transactions",
                value: transCount
            }, {
                id: "r-monthly-total-sum",
                value: transSum
            }, {
                id: "r-balance-sum",
                value: balanceSum
            }, {
                id: "r-accrued-cb-sum",
                value: accruedSum
            }, {
                id: "r-debited-cb-sum",
                value: debitedSum
            }
        ];
        populateEls(populateTableMonthlyTotal_arr);
     }
     catch (e) {
        // statements to handle any exceptions
        console.log("Error in function populateCbTable: ", e); // pass exception object to error handler
     }

};

export default populateRcbTables;