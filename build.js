'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')
const terminalLink = require('terminal-link');
const terminalImage = require('terminal-image');


// Text + chalk definitions
const data = {
  name: 'Gary Großgarten',
  handle: 'garygrossgarten',
  work: 'Software Developer',
  web: 'https://garygrossgarten.de',
  twitter: 'https://twitter.com/garygrossgarten',
  GitHub: 'https://github.com/garygrossgarten',
  npm: 'https://npmjs.com/~garygrossgarten',
  card: '@garygrossgarten/me'
}

const options = {
  fallback: (text, url) => {
    return url;
  }
}

const output = chalk.white(`                                     
,gggg,gg    ,gggg,gg   ,gggggg,  gg     gg 
dP"  "Y8I   dP"  "Y8I   dP""""8I  I8     8I 
i8'    ,8I  i8'    ,8I  ,8'    8I  I8,   ,8I 
,d8,   ,d8I ,d8,   ,d8b,,dP     Y8,,d8b, ,d8I 
 "Y8888P"888P"Y8888P"\`Y88P       \`8P""Y88P"8
     ,d8I'                             ,d8I'
   ,dP'8I    ${chalk.blueBright(data.name)}          ,dP'8I 
   ,8"  8I   ${chalk.gray(data.work)}      ,8"  8I 
   I8   8I                           I8   8I 
  \`8, ,8I                           \`8, ,8I 
   \`Y8P"                             \`Y8P"  
${'-'.repeat(46)}
${chalk.hex('#1dcaff')('Twitter:')} ${terminalLink('@' + data.handle, data.twitter, options)}   
${chalk.blueBright('    Web:')} ${terminalLink('garygrossgarten.de', data.web, options)} 
${chalk.hex('#211F1F')(' GitHub:')} ${terminalLink(data.handle, data.GitHub, options)}   
${chalk.hex('#CC3534')('    npm:')} ${terminalLink('~' + data.handle, data.npm, options)}   

          ${chalk.hex('#CC3534')('npx')} ${data.card}   
`)

// terminalImage.file('garygrossgarten.jpeg')
// .then((image)=>{
//   const o = image + '\n' + output;
//   fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.gray(boxen(o, { padding: 1, margin: 2, borderStyle: 'round' })));
// }).catch(err => console.log(err.text));

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.gray(boxen(output, { padding: 1, margin: 1, borderStyle: 'round' })));

