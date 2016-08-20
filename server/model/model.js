var mongoose = require('mongoose');

var model = mongoose.Schema({
 pressure: String,
 humidity: String,
sunrise: String,
sunset: String,
clouds: String,
wind: String,
name:String,
 })

var model = mongoose.model(
 'model', model);

module.exports=model;
