var Countdown = require('../models/countdown.server.model.js');

exports.demo = function(req, res) {
	
	var ps = {
		somePar1: 'aaa',
		somePar2: 100
	};
	
	res.render('demo', { title: 'Site live', cdparams: ps });
};


exports.createCountdown = function(req, res) {
    var entry = new Countdown({
        countdownTitle: req.body.countdownTitle
    });

    entry.save(function (err) {
        if (err) {
            var errMsg = 'Sorry, there was an error saving the countdown details. ' + err;
            res.render('new', { title: 'Countdown - Error', message: errMsg });
        }
        else {
            console.log('Countdown was saved!');
            // Redirect to the home page to display list of notes...
            res.redirect(301, '/');
        }
    });

};

exports.newCountdown = function (req, res) {
    res.render('new', { title: 'New Countdown'});
}

exports.list = function(req, res) {
    var query = Countdown.find();

    query.sort({ createdOn: 'desc'})
        .limit(10)
        .exec(function(err, results){
           res.render('list', { title: 'Countdowns - List', items: results });
        });

};

exports.getCountdown = function (req, res) {    
    Countdown.findOne({_id: req.params.id }, function(err, doc){
        res.render('cd', { title: doc.countdownTitle });
    });
}
