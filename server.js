const app = require('./app');
const port = process.env.port || 8080;

const server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

