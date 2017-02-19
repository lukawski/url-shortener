'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _url = require('./routes/url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 3000;

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connect('mongodb://localhost/urls').then(function () {
  return console.log('Connected');
}).catch(function (err) {
  return console.log(err);
});

app.use('/new', _url2.default);

app.listen(port);
console.log('App running at port ' + port);