require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const campaignRoutes = require('./routes/campaign')
const loginRoutes = require('./routes/loginRoute');
const mapRoutes = require('./routes/mapRoute');
const multer = require('multer');
const {postDetails, getDetails} = require('./controllers/mapController');
// const MapModel = require('./models/mapModel');
// const fs = require('fs');
const { log } = require('console')

//Express App
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

//Middleware

//Configuring Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix + file.originalname)
    }
  })
  
const upload = multer({ storage: storage })
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

//Routes
app.use('/' ,loginRoutes);
// app.use('/api/trash', mapRoutes);
app.get('/api/trash', getDetails);
app.post('/api/trash', upload.single("image"), postDetails)
app.use('/api/campaign', campaignRoutes)


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
