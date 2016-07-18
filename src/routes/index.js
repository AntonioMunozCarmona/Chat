'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'El Chat de Antonio.com' });
});

module.exports = router;