"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var api_1 = require("./routes/api");
var app = express();
var port = 3000;
app.use('/api', api_1.apiRouter);
app.get('/', function (req, res) {
    res.json({ message: "No data here." });
});
app.listen(port, function () {
    console.log("App running at http://localhost:".concat(port));
});
