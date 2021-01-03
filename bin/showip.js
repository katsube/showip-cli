#!/usr/bin/env node
"use strict";

/**
 * Show IP Address
 *
 * @author  M.Katsube <katsubemakito@gmail.com>
 * @license MIT
 */

//--------------------------------------
// Module
//--------------------------------------
const p = require('../package.json')
const program = require('commander')
const ShowGlobalIP = require('../index.js')
const showip  = new ShowGlobalIP()

//--------------------------------------
// commander
//--------------------------------------
program
  .version(p.version)
  .option('-s, --service [service]',  'use service [aws|google|ifconfigio|ifconfigme|ipaddrshow]. default aws')
  .parse(process.argv);

//--------------------------------------
// Set Default Value
//--------------------------------------
if( program.service === undefined ){
  program.service = 'aws';
}

//--------------------------------------
// Validation
//--------------------------------------
if( showip.setService(program.service) !== true ){
  console.error('Invalid service_cd');
  process.exit(1);
}

//--------------------------------------
// Show IPAddress
//--------------------------------------
showip.get((ip)=>{
  console.log(ip);
})