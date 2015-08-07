var express = require('express');
var router = express.Router();
var countdownCtrl = require('../controllers/countdown.server.controller');

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
