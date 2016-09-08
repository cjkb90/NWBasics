var express = require('express');
var router = express.Router();
var models = require('../index.js');
var Product = models.Product;
var path = require('path');
var bodyParser = require('body-parser');
var apiIndex = require('./apiIndex.js');

var landingPage = path.join(__dirname, '..', '..', '/public/index.html');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.use('/browser', express.static(path.join(__dirname, '..', '..', 'browser')));
router.use('/api', apiIndex);

router.get('/', function(req, res){
	res.sendFile(landingPage);
});

module.exports = router;