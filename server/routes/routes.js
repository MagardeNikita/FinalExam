var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../model/model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log("magarde1");
  console.log(req);
  console.log("magarde");
 model.find(function(err,data){
   if(err){
     console.log(err);
   }else{
     res.send(data)
   }
 })
//  res.send('respond with a resource');
})
.post('/', function(req, res, next){
 var messages = new model({ pressure: req.body.pressure,
  humidity: req.body.humidity,sunrise: req.body.sunrise,sunset: req.body.sunset,clouds: req.body.clouds,wind: req.body.wind,name:req.body.name});
 messages.save(function (err)
{
   if (err)
    {
     console.log(err);
   } else
   {
     console.log('Hello Saved');
    res.send({response:"data is saved"});
   }
 });
});



module.exports = router;
