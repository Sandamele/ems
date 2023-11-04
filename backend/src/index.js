const express = require("express");
const config = require('./config');
const app = express();
const PORT = process.env.PORT || 9999;
const bodyParser = require("body-parser");
const db = require('./config/dbConnection');
const cookieParser = require("cookie-parser");
const cors = require('cors');
// Routes
const registerRoute = require('./routes/admin');
const departmentRoute = require("./routes/department");
const employeeRoute = require("./routes/employee");

db.authenticate().then(() => {
  console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors())
app.use(cookieParser());
// We are testing to see if the server is functioning correctly."
app.get("/api/testing", (req, res) => {
  res.send("Server is working");
});

// Register admin
app.use('/api/admin', registerRoute);

// Department
app.use('/api/department', departmentRoute);

// Employee 
app.use('/api/employee', employeeRoute);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
