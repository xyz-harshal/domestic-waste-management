const mongoose = require('mongoose')

const Schema = mongoose.Schema

const campaignSchema = new Schema({
    organizationName: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
    },
    time: {
        type: String,
        required: true
    },
    maxPeopleLimit: {
        type: Number,
        required: true
    },
    agenda: {
        type: String,
        required: true
    },
    organizerEmail: {
        type: String, 
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    briefing: {
        type: String,
        required: true
    }
    
}, { timestamps: true})

module.exports = mongoose.model('Campaign', campaignSchema)