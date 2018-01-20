const express = require('express');
const pDataLinearGraph1 = require('./model/data-linear-graph-p1.json');
const pDataLinearGraph2 = require('./model/data-linear-graph-p2.json');
const pDataLinearGraph3 = require('./model/data-linear-graph-p3.json');
const pDataTable1 = require('./model/data-table-p1.json');
const pDataTable2 = require('./model/data-table-p2.json');
const pDataTable3 = require('./model/data-table-p3.json');
const rDataLinearGraph1 = require('./model/data-linear-graph-r1.json');
const rDataLinearGraph2 = require('./model/data-linear-graph-r2.json');
const rDataLinearGraph3 = require('./model/data-linear-graph-r3.json');
const rDataTable1 = require('./model/data-table-r1.json');
const rDataTable2 = require('./model/data-table-r2.json');
const rDataTable3 = require('./model/data-table-r3.json');
const pDataPie = require('./model/data-pie-p.json');
const rDataPie = require('./model/data-pie-r.json');


let app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
    res.render("index.html");
});

// linear graph data Urls
// Partner CB
app.get("/api/Statistics/GetLinearGraphStatisticsData/2018-01-18/1", (req, res) => {
    res.send(pDataLinearGraph1);
});
app.get("/api/Statistics/GetLinearGraphStatisticsData/2017-12-31/1", (req, res) => {
    res.send(pDataLinearGraph2);
});
app.get("/api/Statistics/GetLinearGraphStatisticsData/2017-11-30/1", (req, res) => {
    res.send(pDataLinearGraph3);
});
// Reverse CB
app.get("/api/Statistics/GetLinearGraphStatisticsData/2018-01-18/2", (req, res) => {
    res.send(rDataLinearGraph1);
});
app.get("/api/Statistics/GetLinearGraphStatisticsData/2017-12-31/2", (req, res) => {
    res.send(rDataLinearGraph2);
});
app.get("/api/Statistics/GetLinearGraphStatisticsData/2017-11-30/2", (req, res) => {
    res.send(rDataLinearGraph3);
});

// table data Urls
// Partner CB
app.get("/api/Statistics/GetTableStatisticsData/2018-01-18/1", (req, res) => {
    res.send(pDataTable1);
});
app.get("/api/Statistics/GetTableStatisticsData/2017-12-31/1", (req, res) => {
    res.send(pDataTable2);
});
app.get("/api/Statistics/GetTableStatisticsData/2017-11-30/1", (req, res) => {
    res.send(pDataTable3);
});
// Reverse CB
app.get("/api/Statistics/GetTableStatisticsData/2018-01-18/2", (req, res) => {
    res.send(rDataTable1);
});
app.get("/api/Statistics/GetTableStatisticsData/2017-12-31/2", (req, res) => {
    res.send(rDataTable2);
});
app.get("/api/Statistics/GetTableStatisticsData/2017-11-30/2", (req, res) => {
    res.send(rDataTable3);
});

// table data Urls
// Partner CB
app.get("/api/Statistics/GetPieChartStatisticsData/1", (req, res) => {
    res.send(pDataPie);
});
// Reverse CB
app.get("/api/Statistics/GetPieChartStatisticsData/2", (req, res) => {
    res.send(rDataPie);
});


app.listen(3007, () => {
    console.log("Server is up on port 3007");
});
