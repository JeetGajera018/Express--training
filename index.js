var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});
router.get('/Marks', function(req, res, next) {
  res.render('Marks', { title: 'Express' });
});
router.get('/process', function(req, res, next) {
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = a + b;
  console.log(`sum is ${c}`)
  
  
  res.render('Ans', { mya:a,myb:b,myc:c});
});
router.get('/process2', function(req, res, next) {
  var a = parseInt(req.body.txt1);
  var b = parseInt(req.body.txt2);
  var c = parseInt(req.body.txt3);
  var d = parseInt(req.body.txt4);
  var e = parseInt(req.body.txt5);
  var f = (a + b + c + d + e)/5;
  console.log(`average is ${f}`)
  var Average;
  
  res.render('Ans2', { mya:a,myb:b,myc:c,myd:d,mye:e,Average:f});
});




module.exports = router;


