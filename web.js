'use strict';

// var gzippo = require('gzippo'); // TODO: Reactivate this for better performance - right now crashing app - TypeError: staticSend is not a function
var express = require('express');
var nodeApp = express();

nodeApp.use(express.logger('dev'));
// nodeApp.use(gzippo.staticGzip('' + __dirname + '/app'));
nodeApp.use(express.static(__dirname+'/app'));
nodeApp.listen(process.env.PORT || 5000);