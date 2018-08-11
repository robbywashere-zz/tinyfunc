const http = require('http');

const ffport = require('find-free-port');

const path = require('path');

const request = require('request-promise');

const defaultpath = path.join(__dirname,'..','public');

const { EventEmitter } = require('events');

const express = require('express');

if (require.main === module) {
  yougotserved().then(console.log)
} 

async function yougotserved({ path = defaultpath, port = 8001, events = (new EventEmitter()) }){ 
  const [ fport ] = await ffport(port);

  const app = express();

  app.use(express.static(path));

  app.use(function(req, res, next){
    //req.path not found!
    const error = new Error(`path '${req.path}' not found`);
    error.statusCode = 404;
    events.emit('error', error);
  })

  const server = app.listen(fport, (err) => { 
    if (err)  events.emit('error',err);
    events.emit('server:start', { port: fport });
  });

  events.on('close',()=>{ try { server.close() } catch(e) {} })

}

module.exports = yougotserved;
