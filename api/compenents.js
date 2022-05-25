const express = require('express');
const Router = express.Router();

Router.get('/',(req,res)=>{
    res.json({
        "status" : 200,
        "Message" : "Get data successful"
    })
})
module.exports = Router;