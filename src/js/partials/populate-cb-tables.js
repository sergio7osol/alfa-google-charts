import populateEls from './populate-elements';

const populateCbTables = (data) => {
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
                id: "monthly-val",
                value: month
            }, {
                id: "monthly-others-val",
                value: month
            }, {
                id: "monthly-total-clients",
                value: clientCount
            }, {
                id: "monthly-total-transactions",
                value: transCount
            }, {
                id: "monthly-total-sum",
                value: transSum
            }, {
                id: "monthly-total-plan-cb-sum",
                value: planCbSum
            }, {
                id: "monthly-total-approved-cb-sum",
                value: approvedCbSum
            }
        ];
        populateEls(populateTableMonthlyTotal_arr);
    
        // Populate Monthly Other data Table
        const populateTableOtherData_arr = [
            {
                id: "partner-count",
                value: partnerCount
            }, {
                id: "promo-count",
                value: promoCount
            }, {
                id: "on-approval-count",
                value: registerOnApprovalCount
            }, {
                id: "approved-count",
                value: registerApprovedCount
            }, {
                id: "payed-count",
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

export default populateCbTables;