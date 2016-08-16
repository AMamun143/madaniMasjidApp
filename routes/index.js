var express = require('express');
var router = express.Router();

// Get Homepage
router.get('/donate', ensureAuthenticated, function(req, res){
	res.render('donate');
});

router.get('/', function(req, res){
	res.render('home');
});

router.get('/home', function(req, res){
	res.render('home');
});

router.get('/about', function(req, res){
	res.render('about');
});

router.get('/event', function(req, res){
	res.render('event');
});

router.get('/school', function(req, res){
	res.render('school');
});

router.get('/contact', function(req, res){
	res.render('contact');
});

// router.get('/donate', function(req, res){
// 	res.render('donate');
// });

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		//req.flash('error_msg','You are not logged in');
		res.redirect('/users/login');
	}
}

module.exports = router;