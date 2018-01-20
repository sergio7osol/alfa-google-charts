import populateEls from './populate-elements';

const populatePcbTables = (data) => {
    // data for graphs&table
    try {
        const month = data.Month;
        const clientCount = data.ClientsByMonthCount;
        const transCount = data.TransactionsByMonthCount;
        const transSum = data.TransactionByMonthSum;
        const planCbSum = data.PendingCashbackByMonthSum;
        let approvedCbSum = data.ApprovedCashbackByMonthSum;
    
        let partnerCount = data.ActivePartnersByMonthCount;
        let promoCount = data.ActiveBatchesByMonthCount;
        let registerOnApprovalCount = data.AgreementReestrsByMonthCount;
        let registerApprovedCount = data.AgreedReestrsByMonthCount;
        let registerPayedCount = data.PaidReestrsByMonthCount;
        
        // Populate Monthly Total Table
        const populateTableMonthlyTotal_arr = [
            {
                id: "p-monthly-val", 
                value: month
            }, {
                id: "p-monthly-others-val",
                value: month
            }, {
                id: "p-monthly-total-clients",
                value: clientCount
            }, {
                id: "p-monthly-total-transactions",
                value: transCount
            }, {
                id: "p-monthly-total-sum",
                value: transSum
            }, {
                id: "p-monthly-total-plan-cb-sum",
                value: planCbSum
            }, {
                id: "p-monthly-total-approved-cb-sum",
                value: approvedCbSum
            }
        ];
        populateEls(populateTableMonthlyTotal_arr);
    
        // Populate Monthly Other data Table
        const populateTableOtherData_arr = [
            {
                id: "p-partner-count",
                value: partnerCount
            }, {
                id: "p-promo-count",
                value: promoCount
            }, {
                id: "p-on-approval-count",
                value: registerOnApprovalCount
            }, {
                id: "p-approved-count",
                value: registerApprovedCount
            }, {
                id: "p-payed-count",
                value: registerPayedCount
            }
        ];
        populateEls(populateTableOtherData_arr);
     }
     catch (e) {
        // statements to handle any exceptions
        console.log("Error in function populateCbTable: ", e); // pass exception object to error handler
     }

};

export default populatePcbTables;