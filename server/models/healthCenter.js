const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const healthCenterSchema = new Schema({
  "name": String,
   "address": {
       "street": String,
       "city": String,
       "state": String
   },
   "phonenumber": String,
   "services": String,
   "website": String
});

module.exports = mongoose.model('healthCenter', healthCenterSchema, 'healthcenters');
