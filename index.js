'use strict';
const request = require('request');

class SimpleOrder {

  //lets do this thing
  constructor(client_id, client_secret, grant_type, refresh_token, access_token) {

    if (!client_id || !client_secret || !grant_type || !refresh_token) {

      throw new Error('client_id, client_secret, grant_type and refresh_token are all required');

    }

    this.client_id = this.client_id;
    this.client_secret = client_secret;
    this.grant_type = grant_type;
    this.refresh_token = refresh_token;

    this.access_token = null;
    if (access_token) {
      this.access_token = access_token
    }

  }

  call(method, path, body) {

    if (!body) {
      body = {};
    }

    //https: //api.simpleorder.com/oauth2/token

    method = method.toUpperCase();

    var callUrl = 'https://api.simpleorder.com/v2/' + path;
    console.log(this.apiKey);
    var username = this.apiKey;
    var password = 'x';

    if (this.access_token) {
      var auth = 'Bearer ' + this.access_token;
    }



    var args = {
      method: method,
      url: callUrl,
      headers: {
        Authorization: auth,
      }
    };


    return new Promise((resolve, reject) => {
      request(args, function(error, response, body) {
        console.log(response);
        if (Buffer.isBuffer(body)) {
          reject(
            new Error('something went wrong with the API call \n Request method: POST \n URL: ' + args.url + '\n data: \n ' + body.toString())
          );
        }

        if ((typeof body) == 'string') {
          console.log(body);
          body = JSON.parse(body);
        }
        resolve(body);

      })

    });
  }

}

module.exports = SimpleOrder;
