const Campaign = require('../models/campaignModel')
const mongoose = require('mongoose')

// get all workout
const getCampaigns = async (req, res) => {
    const campaigns = await Campaign.find({}).sort({createdAt: -1})
    res.status(200).json(campaigns)
}

// get single workout
const getSingleCampaign = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such campaign'})
    }

    const campaign = await Campaign.findById(id)

    if(!campaign){
        return res.status(400).json({error: 'No such campaign'})
    } 

    res.status(200).json(campaign)
}

// create a new workout
const createCampaign = async (req, res) => {
    const {organizationName, date, time, maxPeopleLimit, agenda, organizerEmail, phoneNumber, area, district, city, briefing} = req.body
    
    // add doc to db
    try {
        const campaign = await Campaign.create({organizationName, date, time, maxPeopleLimit, agenda, organizerEmail, phoneNumber, area, district, city, briefing})
        res.status(200).json(campaign)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}

// delete a workout
const deleteCampaign = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such campaign'})
    }

    const campaign = await Campaign .findOneAndDelete({_id: id})

    if(!campaign){
        return res.status(400).json({error: 'No such campaign'})
    } 
     
    res.status(200).json(campaign)
}

// update a workout
const updateCampaign = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error: 'No such campaign'})
    }

    const campaign = await Campaign.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!campaign){
        return res.status(400).json({error: 'No such campaign'})
    } 
     
    res.status(200).json(campaign)
}


module.exports = {
    getCampaigns,
    getSingleCampaign,
    createCampaign,
    deleteCampaign,
    updateCampaign
}