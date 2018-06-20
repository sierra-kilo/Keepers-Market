const express = require('express');

const app = express();

// here from boilerplate, dont know what its for.
app.use(express.static('dist'));

app.listen(8080, () => console.log('Listening on port 8080!'));
