require('rootpath')();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const errorHandler = require('_helpers/error-handler');
const userService = require('./users/user.service');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.get('/test', function (req, res, next) {

    console.log('*****test***********');
    console.log(req);
    console.log('>>>>>>>>>>>>>>>>>>>>');
    console.log(req.headers);
    console.log(req.params);
    console.log(req.query);
    //res.send('ok test');
    res.send(req.headers);
});
app.post('/authenticate', function (req, res, next) {
    console.log('*****test***********');
    console.log('req.body', req.body);
    userService.authenticate(req.body)
        .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(err => next(err));
});
// api routes
app.use('/users', require('./users/users.controller'));

// global error handler
app.use(errorHandler);

// start server process.env.PORT || 3000;
//const port = process.env.NODE_ENV === 'production' ? 80 : 3000;
const port = process.env.PORT || 4000 || 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});
// app.listen(process.env.PORT || 3000, function(){
//   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
// });
