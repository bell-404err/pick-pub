"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
var app = (0, express_1.default)();
var PORT = process.env.PORT || 3000;
console.log('Current working directory:', process.cwd());
app.get('/', function (req, res) {
    res.send('Hello World!');
});
var server = app.listen(PORT, function () {
    console.log("Example app listening on port ".concat(PORT));
});
exports.default = server;
