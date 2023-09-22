const db = require("../Model");
const Tutorial = db.tutorials;
const service = require("../Service/service");


// Create and Save a new Tutorial
exports.create = (req, res) => {
  service.createdata(req,res);
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
    service.fetchdata(req,res);
  
};



// Update a Tutorial by the id in the request
exports.update = (req, res) => {
   
service.updatedata(req, res);
  
};



// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    service.deletedata(req,res);
  };




//delete all data
exports.deleteAll = (req, res) => {
  service.deletedata(req,res);
  };
  

 //Register User
 
