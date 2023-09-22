const db = require("../Model");
const Tutorial = db.tutorials;
const User = db.users;
const jwt = require('jsonwebtoken');
const dbConfig = require("../config/db.config.js");



exports.fetchdata = (req, res) => {
  console.log("calleddd findd");
  Tutorial.find()
    .then(data => {
      console.log(req.params);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};




exports.updatedata = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else res.send({ message: "Tutorial was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
};

//delete single record
exports.deletedata = (req, res) => {
  const id = req.params.id;

  Tutorial.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } else {
        res.send({
          message: "Tutorial was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id
      });
    });
};


exports.deletedata = (req, res) => {
  Tutorial.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Tutorials were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    });
};


exports.createdata = (req, res) => {
  console.log(req.body);
  debugger

  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });


  tutorial
    .save(tutorial)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
}


exports.registeration = (req, res) => {
  console.log(req.body);
  const user = new User({
    mobile: req.body.mobile,
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,

  })

  user.save(user).then(data => {
    res.send(data)
  }).catch(err => {
    res.send(err
    );
  });
}

exports.login = async (req, res) => {
  try {
    // check if the user exists
    const user = await User.findOne({ email: req.body.email });
  
    if (user) {
  
      const result = req.body.password === user.password;
      if (result) {
        console.log(user);
        const token = jwt.sign({id: user._id , email : user.email}, "dhfjdhfjskff",{ expiresIn: "10h"});
        console.log("erowrppfkorekfop");
        res.header("auth-token", token).send({"token": token});
       
      } else {
        res.status(400).send( "password doesn't match");
      }
    } else {
      res.status(400).send( "User doesn't exist" );
    }
  } catch (error) {
    res.status(400).send( error );
  }

};


exports.isAuthenticated = async (req, res, next)=>{
  console.log("calleddd isAuthenticated");
  let testtoken = await req.headers.authorization;
 
  let token;

  if(testtoken){
    console.log("dfhkdjfkk");
    token = testtoken.replace("Bearer","").trim();
     console.log(token);
    
    
    const verified = jwt.verify(token, "dhfjdhfjskff"); 
    console.log(verified);
    
    next();
  }
  else{
    res.send("Not Authorized");
  }


 
}