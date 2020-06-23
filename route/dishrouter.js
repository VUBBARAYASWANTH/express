const express = require('express');
const bodyparser = require('body-parser');
const { Router } = require('express');
const dishRouter = express.Router();
dishRouter.use(bodyparser.json());
dishRouter.route('/')
.all((req,res,next) =>{
    req.statusCode = 200;
    res.setHeader('Content-Type','html/text');
    next();
})
.get((req,res,next)=>{
    res.end('will send all the dishes to you'+req.params.dishId +'to you');
})
.post((req,res,next) =>{
    res.end('will add the dish :' + req.body.name +'with details: ' + req.body.description);

})
.put((req,res,next) =>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req,res,next) =>{
    res.end('all the dishes are deleted')
})
module.exports = dishRouter;
