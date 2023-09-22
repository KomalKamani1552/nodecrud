module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", tutorials.create);
  
    // Retrieve all Tutorials
    router.get("/", tutorials.findAll);

  
    // Update a Tutorial with id
    router.put("/:id", tutorials.update);
    
  
    // Delete a Tutorial with id
    router.delete("/:id", tutorials.delete);

  
    // Delete all Tutorials
    router.delete("/", tutorials.deleteAll);

    //Register User
    router.post('/register' , users.register);
    router.post('/login', users.login);

    router.get('/destinations', users.destinations);
    app.use('/api/tutorials', router);
  };




  