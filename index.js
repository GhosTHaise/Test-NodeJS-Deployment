const express = require('express');
const component = require('./api/compenents')
const app = new express();

const port = process.env.PORT || 5050;

app.use("/api/component",component)

app.listen(port,() =>{
    console.log("App is ready on http://localhost:"+port);
})