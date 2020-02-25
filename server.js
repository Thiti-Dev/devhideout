const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
//import custom logger middleware
//const logger = require('./middleware/logger');

// Route files
const bootcamps = require('./routes/api/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

//using custom logger
//app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
	console.log(`The server is currently running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
