'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var trainerSchema = new Schema({
  id: Number,
  username: String,
  name: String,
  password: String,
  email: String,
  phone: Number,
  location: String,
  appointments: [Number],
  services : [String]
});

var traineeSchema = new Schema({
	id: Number,
	username: String,
	name: String,
	password: String,
	email: String,
	phone: Number,
	location: String,
	appointments: [Number],
});

var appointmentSchema = new Schema({
	id: Number,
	trainer_id: Number,
	trainee_id: Number,
	date: String,
	service_type: [String]
});

module.exports = {
	trainer: trainerSchema,
	trainee: traineeSchema,
	appointment: appointmentSchema
};
// module.exports = mongoose.model('Trainer', trainerSchema);
// module.exports = mongoose.model('Trainee', traineeSchema);
// export trainerSchema;
// export traineeSchema;
// export appointmentSchema;