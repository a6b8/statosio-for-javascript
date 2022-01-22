const fs = require( 'fs' )
const puppeteer = require( 'puppeteer' )

try {
  async function test() {
    const statosio = fs.readFileSync( 
        './dist/statosio.js',
        { encoding: 'utf8' } 
    )
    const template = fs.readFileSync( 
        './test/files/template.html',
        { encoding: 'utf8' } 
    )
    const htmls = template
        .split( '//insert statosio' )
    htmls.splice( 1, 0, statosio )
    html = htmls.join( '' )

    const browser = await puppeteer.launch( { headless: true } )
    const page = await browser.newPage()

    const buff = new Buffer.from( html )
    const base64data = buff.toString( 'base64' )
    const data_str = `data:text/html;base64,${base64data}`

    await page.goto(
      data_str, 
      { waitUntil: ["load","networkidle0"] }
    )

    const test = await page.evaluate(() => {
        return document
            .getElementById( 'd3_statosio' )
            .getElementsByTagName( 'svg' )[ 0 ]
            .outerHTML
    } )

    const original = fs.readFileSync( 
        './test/files/compare.html',
        { encoding: 'utf8' } 
    )

    await browser.close()

    if( original === test ) {
        console.log( 'Test passed.' )
        process.exit( 0 )
    } else {
        console.log( 'Test not passed.' )
        process.exit( 1 )
    }
  }
  test()
} catch {
  process.exit( 1 )
}


