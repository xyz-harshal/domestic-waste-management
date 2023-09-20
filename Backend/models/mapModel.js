const mongoose = require('mongoose');

const mapSchema = new mongoose.Schema({
    description:{
        type: String                
    },
    address:{
        type: String        
    },
    lat:{
        type: Number        
    },
    long:{
        type: Number        
    },
    image: {
        data: Buffer,
        contentType: String        
    }
});

module.exports = mongoose.model("Map", mapSchema);