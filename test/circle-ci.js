function addStr( str, index, insert ){
  return str.substring( 0, index ) + insert + str.substring( index, str.length );
}


const fs = require( 'fs' )
const puppeteer = require( 'puppeteer' )

async function test() {
  const statosio = fs.readFileSync( './dist/statosio.js' ,{ encoding: 'utf8' } )
  const template = fs.readFileSync( './test/files/template.html' ,{ encoding: 'utf8' } )
  
  const htmls = template
      .split( '//insert statosio' )
  htmls.splice( 1, 0, statosio )
  html = htmls.join( '' )

  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setContent( 
      html, 
      { waitUntil: [ 'load','networkidle0' ] } 
  )

  const test = await page.evaluate(() => {
      return document
          .getElementById( 'd3_statosio' )
          .getElementsByTagName( 'svg' )[ 0 ]
          .outerHTML
  });

  const original = fs.readFileSync( './test/files/compare.html' ,{ encoding: 'utf8' } )
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