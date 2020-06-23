const express = require('express');
const http = require('http');
const morgan = require('morgan');

const port = 6567
const hostname = "localhost";
const app = express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/'))
app.use((req,res,next) => {
    console.log(req.headers);
    res.StatusCode = 200;
    res.setHeader ('Content-Type','html/text');
    res.end('<html><head></head><h1>expresslearning</h1></html>');
    
});
const server = http.createServer(app);
server.listen(port,hostname,() =>{
    console.log(`server is listening to port -> ${port} on the url -> ${hostname}`)
})
