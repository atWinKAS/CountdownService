var express = require('express');
var router = express.Router();
var standupCtrl = require('../controllers/standup.server.controller');
var countdownCtrl = require('../controllers/countdown.server.controller');

/* GET home page. */
router.get('/notes', function(req, res) {
  return standupCtrl.list(req, res);
});

/* POST filter by member name - home page. */
router.post('/notes', function(req, res) {
    return standupCtrl.filterByMember(req, res);
});

/* GET New Note page. */
router.get('/newnote', function(req, res) {
    return standupCtrl.getNote(req, res);
});

/* POST New Note page. */
router.post('/newnote', function(req, res) {
    return standupCtrl.create(req, res);
});

router.get('/', function(req, res) {
  return countdownCtrl.demo(req, res);
});

/* GET New CD page. */
router.get('/create', function(req, res) {
    return countdownCtrl.newCountdown(req, res);
});

/* POST New CD page. */
router.post('/create', function(req, res) {
    return countdownCtrl.createCountdown(req, res);
});

router.get('/list', function(req, res) {
  return countdownCtrl.list(req, res);
});

router.get('/cd/:id', function(req, res) {
  return countdownCtrl.getCountdown(req, res);
});


module.exports = router;
