const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;

const HealthCenter = require('../models/healthcenter');

const dbConnection = 'mongodb://tony:password@localhost:27017/healthcenters'
//mongoose.Promise = global.Promise;
//mongoose.connect(dbConnection, {useMongoClient:true}, function(err, db){
//  if(err){
//    console.error("Error! " + err);
//  }
//});
//test connection for error information**************************
mongoose.connect(dbConnection);

mongoose.connection.on('error', function(error) {
  console.error('Database connection error:', error);
});

mongoose.connection.once('open', function() {
  console.log('Database connected');
});
//***************************************************************

router.get('/healthcenters', function(req, res){
  console.log('Get request for all health centers');
  HealthCenter.find({}, function(err, healthcenters){
    if(err){
      console.log("Error retrieving health centers");
    }else{
      res.json(healthcenters);
    }
  });
});

router.get('/healthcenters/:id', function(req, res){
  console.log('Get request for one health center');
  HealthCenter.findById(req.params.id, function(err, healthcenter){
    if(err){
      console.log("Error retrieving health center");
    }else{
      res.json(healthcenter);
    }
  });
});

router.post('/healthcenter', function(req, res){
  console.log('Post a video');
  var newHealthCenter = new HealthCenter();
  newHealthCenter.name = req.body.name;
  newHealthCenter.address.street = req.body.street;
  newHealthCenter.address.city = req.body.city;
  newHealthCenter.address.state = req.body.state;
  newHealthCenter.phonenumber = req.body.phonenumber;
  newHealthCenter.services = req.body.services;
  newHealthCenter.website = req.body.website;
  newHealthCenter.save(function(err, insertedHealthCenter){
    if (err){
      console.log('Error saving Health ceter');
    }else{
      res.json(insertedHealthCenter);
    }
  });
});

router.put('/healthcenter/:id', function(req, res){
  console.log('Update a health center');
  HealthCenter.findByIdAndUpdate(req.params.id,
  {
    $set: {
      name: req.body.name,
      address: {
        street: req.body.street,
        city: req.body.city, state: req.body.state
      },
      phonenumber: req.body.phonenumber,
      services: req.body.services,
      website: req.body.website
    }
  },{new: true},
    function(err, updatedHealthCenter){
        if(err){
          res.send(err);
        }else{
          res.json(updatedHealthCenter);
        }
  });
});

router.delete('/healthcenter/:id', function(req, res){
  console.log('Deleting a health center');
  HealthCenter.findByIdAndRemove(req.params.id, function(err, deletedHealthCenter){
    if(err){
      res.send(err);
    }else{
      res.json(deletedHealthCenter);
    }
  });
});

module.exports = router;
