//Install express server
const express = require('express');
const path = require('path');

const morgan = require('morgan');

const cors = require('cors');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/appDRFront'));

app.use(morgan('dev'));
app.use(cors({ origin: 'http://localhost:' + process.env.PORT }));

//Routes
app.use('/api', require('./routes/appDR.routes'));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/dist/appDRFront/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);