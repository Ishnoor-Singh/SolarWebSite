// ENV VARIABLES
const dotenv = require('dotenv').config();
const fileUpload = require('express-fileupload');
var cookieParser = require('cookie-parser');

//Databases
const mongoose = require('mongoose');

const express = require('express'),
	app = express(),
	PORT = 5000;
const cors = require('cors');
app.use(cors({credentials: true, origin: process.env.ENV === 'production' ? 'http://designcreatesolar.org' : 'http://localhost:3000'}));

app.use(cookieParser());

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(fileUpload({ createParentPath: true }));

//ROUTES
const dataRoutes = require('./routes/dataRoute'); //for time series db
app.use('/data', dataRoutes);
const authRoute = require('./routes/authRoute'); //contains register and login endpoints eg: /auth/register, /auth/login
app.use('/auth', authRoute);
const block = require('./routes/blockRoute'); //for website builder blocks
app.use('/block', block);

//connect to mongodb
mongoose.connect(
	process.env.DB_URL,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	},
	(err) => {
		if (err) console.log(err);
		else console.log('Connected');
	}
);

app.listen(PORT, () => console.log('Server listening on port ' + PORT + '.'));

//socket.io realtime updates:

//const socketIo = require("socket.io");

// const server = require("http").Server(app);
// const io = socketIo(server);
// server.listen(PORT, () => {
//   console.log("Listening on " + PORT);
// });

// let interval;
// io.on("connection", (socket) => {
//   console.log("New client connected");
//   module.exports = socket;
//   if (interval) {
//     clearInterval(interval);
//   }
//   interval = setInterval(
//     () => /* insert get request here? */ console.log("still connected"),
//     10000
//   );
//   socket.on("disconnect", () => {
//     console.log("Client disconnected");
//   });
// });