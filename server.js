
const express = require('express');
const path = require('path');
const http = require('http');
const fs = require('fs');
const cors = require('cors');

//Defining relative data paths
const fileTokensList = "../SimulationJS/Data/TokensList.json"
const filePoolsPannel = "../SimulationJS/Data/PoolsPannel.json"
const fileTransactionsData =  "../SimulationJS/Data/TransactionsData.json"
const fileInvestorsPannel = "../SimulationJS/Data/InvestorsPannel.json"

//Defining the port. 
const port = process.env.PORT || 8080;

//Creating express application:
var app = express();
app.use(cors())

console.log(path.join(__dirname, 'source'))

//Setting the website to be statically used. 
app.use(express.static(__dirname))
app.listen(port)