const db = require("../Model");
const User = db.users;
const service = require("../Service/service");


exports.register =(req, res)=>{
    service.registeration(req, res);
}

exports.login =(req, res)=>{
    service.login(req, res);
}


exports.isAuthenticated =(req, res,next)=>{
    service.isAuthenticated(req, res, next);
}

exports.destinations = (req, res,next)=>{
    res.send(["Mars", "Moon", "Earth", "Mercury", "Venus", "Jupiter"
]);
}