// const express = require('express');
//
// const app = express();
//
// // here from boilerplate, dont know what its for.
// app.use(express.static('dist'));
//
// app.listen(8080, () => console.log('Listening on port 8080!'));


const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser')
let PORT = process.env.PORT || 8080;

const app = express();

//Models
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Sync Database
db.sequelize.sync().then(function() {
    console.log('Nice! Database looks fine')
}).catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!")
});

// app.use(express.static('dist'));

//routes
require('./routes/api-routes.js')(app)

app.listen(PORT, () => console.log('Listening on port: ' + PORT));
