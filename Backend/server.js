require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const loginRoutes = require('./routes/loginRoute');

//Express App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/' ,loginRoutes);


//Database connection
try {
    mongoose.connect(process.env.MONGODB_URI)
    console.log("Database connected");
    app.listen(process.env.PORT, function (req, res) {
        console.log("Server running on port ", process.env.PORT);
    });
} catch (error) {
    console.log(error);
}
