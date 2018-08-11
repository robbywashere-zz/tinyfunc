const served = require('./serve');
const { EventEmitter } = require('events');
const printresume = require('./printresumepdf');

const ee = new EventEmitter();

served({ events: ee });

ee.on('server:start', ({ port })=>{
  console.log('Server listening ...', port)
  printresume({ port, events: ee });
});

ee.on('resume:done', ({ path })=>{
  console.log(`Resume finished! ${path}`);
  ee.emit('close');
});
ee.on('error',(error)=>{
  console.error(error);
  ee.emit('close');
})

//ee.on('error',(error)=>);
