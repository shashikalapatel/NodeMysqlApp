const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const employeeRoutes = require('./src/routes/employee.routes')

// parse requests of content-type
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// define a root route
app.get('/', (req, res) => {
  res.send("Hello World");
});

// using as middleware
app.use('/api/v1/employees', employeeRoutes)

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});