const puppeteer = require('puppeteer');
const path = require('path');
const { EventEmitter } = require('events');
const matter = require('gray-matter');
const fs = require('fs');
const chalk = require('chalk')
const url = require('url');
const opn = require('opn');
const { isFinite } = require('lodash');


if (require.main === module) {
  const p = parseInt(process.argv[2]);
  const port = (isFinite(p)) ? p : 8000;
  const events = new EventEmitter();
  events.on('error', (error)=>{
    console.error(error);
    process.exit(1)
  });
  events.on('resume:done',({ path })=>{
    opn(path);
    process.exit(0);
  })
  printresume({ port, events });

} 


async function printresume({ port = 8000, events = (new EventEmitter())}){
    const resumeHTTP = `http://localhost:${port}/resume`;
  try {
    const resumeMdPath = path.join(__dirname, '..','src','markdown-pages','resume.md');
    const resumeMdStr = fs.readFileSync(resumeMdPath, 'utf8');
    const { data: { title } } = matter(resumeMdStr);
    const pdftitle = title.replace(/\s/g,'_')
    const resumePdfPath = path.join(__dirname, '..','static',`${pdftitle}.pdf`);

    const browser = await puppeteer.launch();

    events.on('close',()=>{ try { browser.close() } catch(e) {} });

    const page = await browser.newPage();

    await page.goto(resumeHTTP, {waitUntil: 'networkidle2'});
    await page.emulateMedia('print')
    await page.pdf({ 
      scale: 0.75,
      margin: {
        top: '0.5in',
        right: '0.5in',
        bottom: '0.5in',
        left: '0.5in',
      },
      path: resumePdfPath 
    });


    events.emit('resume:done',{ path: resumePdfPath });
  } catch(e) {
    if (/net::ERR_CONNECTION_REFUSED/.test(e.message)) {
      const loc = url.parse(resumeHTTP).host;
      let error = new Error(`Could not connect to ${loc}, make sure gatsby develop is running \ntry: $> npm start`)
      events.emit('error', error);
    }
    else {
      events.emit('error',e);
    }
  }


}

module.exports = printresume;

