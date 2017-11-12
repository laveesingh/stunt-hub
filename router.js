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
  res.json({ 
    message: 'API is running!!!',
    endpointsList: [{
      home: {
        path: '/',
        methods: 'get'
      },
      login: {
        path: '/login',
        methods: 'post'
      },
      signup: {
        path: '/signup',
        methods: 'post'
      }
    }]
  });
})

router.route('/login')
  .post(function(request, response){
    console.log('reqeust body:', request.body)
  })

router.route('/signup')
  .post(function(request, response){
    console.log('request body:', request.body)
  })


module.exports.router = router
