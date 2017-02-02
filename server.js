// ==========================================================
// ======================= Require ==========================
// ==========================================================
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
require('colors');

// ==========================================================
// ======================= Invoke ===========================
// ==========================================================
var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client/static')));
app.use(express.static(path.join(__dirname, './bower_components')));


// ==========================================================
// ======================= Routes ===========================
// ==========================================================
require('./server/config/routes.js')(app);

// ==========================================================
// ======================= Listen ===========================
// ==========================================================
app.listen(8000, function(){
  console.log("Listening on Port 8000");
})