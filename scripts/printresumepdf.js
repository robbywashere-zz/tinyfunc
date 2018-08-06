const puppeteer = require('puppeteer');
const opn = require('opn');
const path = require('path');
const matter = require('gray-matter');
const fs = require('fs');
const chalk = require('chalk')
const url = require('url');


if (require.main === module) {
  printresume({ open: true }).then(()=>process.exit(0))

} 


async function printresume({ open = false, port = 8000 }){
  const resumeMdPath = path.join(__dirname, '..','src','markdown-pages','resume.md');
  const resumeMdStr = fs.readFileSync(resumeMdPath, 'utf8');
  const { data: { title } } = matter(resumeMdStr);
  const pdftitle = title.replace(/\s/g,'_')
  const resumePdfPath = path.join(__dirname, '..','static',`${pdftitle}.pdf`);
  const resumeHTTP = `http://localhost:${port}/resume`;

  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  try {
    await page.goto(resumeHTTP, {waitUntil: 'networkidle2'});
  } catch(e) {
    if (/net::ERR_CONNECTION_REFUSED/.test(e.message)) {
      const loc = url.parse(resumeHTTP).host;
      throw new Error(`Could not connect to ${loc}, make sure gatsby develop is running \ntry: $> npm start`)
    }
    else throw e;
  }
  await page.emulateMedia('screen')
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

  await browser.close();

  if (open) opn(resumePdfPath);


}

module.exports = printresume;

//)().catch((...args)=>console.error(chalk.red(...args)))
