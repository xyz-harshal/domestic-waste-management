const MapModel = require('../models/mapModel');
const fs = require('fs');

async function postDetails(req, res){
    const {description, address, lat, long} = req.body;    
   
    const map = new MapModel({
        description: description,
        address: address, 
        lat: lat,
        long: long,      
        image: {
            data: fs.readFileSync("uploads/" + req.file.filename),
            contentType: "image/png"
        }
    });

    await map.save()
    .then((mapItem) => {
        console.log("saved successfully");
        res.status(200).json({mapItem});
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({"error": err});
    });
}

async function getDetails(req, res){
    try {
        const result = await MapModel.find({});    
        res.status(200).json(result);        
    } catch (error) {
        res.status(400).json({"error":error});
    }
}

module.exports = {
    postDetails,
    getDetails
}

