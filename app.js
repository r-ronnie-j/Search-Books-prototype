const path = require('path');
const http = require('http');
const express= require('express');
const home =require('./routes/homeroute');
const searchRoute = require('./routes/searchRoute');
const { nextTick } = require('process');

//We are going to start the app 
const app = express();

//In this section we are going to configure the app.
app.set('views',path.join(__dirname,'/views'));
app.set('view engine','pug');
app.use(express.static(path.join(__dirname,'public')));

//We are going to configure the port here
const port = process.env.PORT || 3000 ;

//all the routes will be defined here
app.get('/',home)
app.get('/home',home)
app.get(/\/search\/*/,searchRoute)


app.listen(port);