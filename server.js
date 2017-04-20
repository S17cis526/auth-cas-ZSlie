/** server.js
 * Server for a CAS client
 */

// Constants
const PORT = 3070;

// Requires
var fs = require('fs');
var http = require('http');
var express = require('express');

// The Express app
var app = express();

var option = { 
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}

var server = https.createServer(option, app);

// Serve files from public folder
app.use(express.static('public'));
// or app.use('public/', express.use('public')); // if the user wants to request /public/index.html

// Start the server
server.listen(PORT, function(){
  console.log(PORT);
});
