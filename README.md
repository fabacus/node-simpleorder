# node-simpleorder


``` javascript

'use strict';

console.log('simple order');

var SimpleOrder = require('simple-order');

var client_id = 'xxxxxx';
var grant_type = 'xxxxxx';
var refresh_token = 'xxxxx';
var client_secret = 'xxxxx';
var access_token = 'xxxxxx'; // optional

var simpleOrder = new SimpleOrder(client_id, client_secret, grant_type, refresh_token, access_token);

var method = 'GET';
var path = 'orders';
var parameters = {};

simpleOrder.call(method, path, parameters)
  .then((result) => {

    console.log(result.data.items.requestProducts);

  }).catch((err) => {

    console.log(err);
  })

```