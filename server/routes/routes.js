var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index')
});

router.get('/convert', function(req, res) {
	var result;

	if (req.query.mph !== undefined) {
		result = parseFloat(req.query.mph) * 1.609344;
	} else if (req.query.kph !== undefined) {
		result = parseFloat(req.query.kph )* 0.621371;
	}

	if (result !== undefined && result !== null && result != NaN) {
		res.send({success: true,
				  result: result});
	} else {
		res.send({success: false,
				  result: 'Invalid request.'});
	}
});


module.exports = router;