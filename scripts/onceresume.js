const served = require('../lib/serve');
const printresume = require('./printresumepdf');

(async ()=>{
  const { port, server } = await served();
  await printresume({ port });
  server.close();
})();
