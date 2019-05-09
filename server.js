﻿require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server process.env.PORT || 3000;
//const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const port = server process.env.PORT || 3000;
// const server = app.listen(port, function () {
//     console.log('Server listening on port ' + port);
// });
app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
