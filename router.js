var express = require('express')
var router = express.Router()
var mongoose = require('mongoose');

var schema = require('./model/schema')
var Trainer = mongoose.model('Trainer', schema.trainer);
var Trainee = mongoose.model('Trainee', schema.trainee);
var Appointment = mongoose.model('Appointment', schema.appointment);

var mongoDB = 'mongodb://sravi4701:ravishankar@ds259255.mlab.com:59255/stunthub';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

router.get('/', function(req, res){
  res.json({ message: 'API Initialized!'});
})

router.route('/trainer')
	.get(function(req, res){
    Trainer.find(function(err, trainers){
      if(err)
        res.send(err)
      res.json(trainers)
    });
	})
  .post(function(req, res){
      var trainer = new Trainer();
      trainer.username = req.body.username;
      trainer.password = req.body.password;
      trainer.save(function(err){
        if(err)
          res.send(err);
        res.json({message:'Trainer successfully added'});
      });
  });



module.exports.router = router
