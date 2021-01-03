/**
 * Show Global IPaddress class
 *
 * @author  M.Katsube <katsubemakito@gmail.com>
 * @license MIT
 */
'use strict';

//---------------------------------------------------------
// Module
//---------------------------------------------------------
const fetch = require('node-fetch');

//---------------------------------------------------------
// Class
//---------------------------------------------------------
module.exports = class showip {
  constructor(service='aws'){
    this.setService(service);
    this._fetchoption = {
      timeout: 10 * 1000    // 10sec
    }
  }

  setService(service){
    if ( service.match(/^(aws|google|ifconfigio|ifconfigme|ipaddrshow)$/i) ){
      this._service = service;
      return(true);
    }
    return(false);
  }

  get(callback){
    const service = this._service;
    const options = this._fetchoption;
    const endpoint = {
      'aws': 'https://checkip.amazonaws.com',
      'google': 'https://domains.google.com/checkip',
      'ifconfigio': 'https://ifconfig.io/ip',
      'ifconfigme': 'https://ifconfig.me/ip',
      'ipaddrshow': 'http://ipaddr.show/'
    }

    fetch(endpoint[service], options)
        .then(res => res.text())
        .then((text)=>{
          const buff = text.replace(/[\r\n]/g, '');
          callback(buff)
        });
  }
}