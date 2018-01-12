import populateEls from './populate-elements';

const populateRcbTables = (data) => {
    // data for graphs&table
    try {
        const clientCount = data.ClientsByMonthCount;
        const transCount = data.TransactionsByMonthCount;
        const transSum = data.TransactionByMonthSum;
        const balanceSum = data.BalanceByMonthSum;
        let accruedSum = data.AccruedCashbackByMonthSum;
        let debitedSum = data.DebitedCashbackByMonthSum;
    
        // Populate Monthly Total Table
        const populateTableMonthlyTotal_arr = [
            {
                id: "rcb-monthly-total-clients",
                value: clientCount
            }, {
                id: "rcb-monthly-total-transactions",
                value: transCount
            }, {
                id: "rcb-monthly-total-sum",
                value: transSum
            }, {
                id: "rcb-monthly-balance-sum",
                value: balanceSum
            }, {
                id: "rcb-monthly-accrued-sum",
                value: accruedSum
            }, {
                id: "rcb-monthly-debited-sum",
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