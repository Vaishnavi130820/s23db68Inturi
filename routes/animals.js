var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('animals', { title: 'Search Results animals' });
});

module.exports = router;