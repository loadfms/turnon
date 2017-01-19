// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var path = require('path');
var fs = require('fs')   

var status = false;

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/api/', function(req, res) {
    res.json(status);   
});

router.post('/api/', function(req, res) {
    status = !status;
    res.json(status);   
});

router.get('/', function(req, res){
    let file = __dirname + '/index.html'                                                     
    res.writeHead(200, {"Content-Type": "text/html"});                                                 
    fs.createReadStream(file).pipe(res);          
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/', router);
app.use(express.static('public'));

// START THE SERVER
// =============================================================================
app.listen(port);