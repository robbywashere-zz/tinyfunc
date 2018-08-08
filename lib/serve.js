const http = require('http');

const ffport = require('find-free-port');

const finalhandler = require('finalhandler');

const serveStatic = require('serve-static');

const path = require('path');

const request = require('request-promise');

const defaultpath = path.join(__dirname,'..','public');

if (require.main === module) {
  yougotserved().then(console.log)
} 

async function yougotserved(path = defaultpath, port = 8001){ 
  const [ fport ] = await ffport(port);
  const serve = serveStatic(path);
  const server = http.createServer(function(req, res) {
    const done = finalhandler(req, res);
    serve(req, res, done);
  })
  return new Promise((rs,rx)=>server.listen({ port: fport },(err)=>{ 
     if (err) return rx(err);
     rs({ port: fport, server })
  }))
}

module.exports = yougotserved;
