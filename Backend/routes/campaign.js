const express = require('express')
const {
    getCampaigns,
    getSingleCampaign,
    createCampaign,
    deleteCampaign,
    updateCampaign
} = require('../controllers/campaignController')

const router = express.Router()

// getting all the campaigns
router.get('/', getCampaigns)

// getting a single workout
router.get('/:id', getSingleCampaign)

// posting a new workout
router.post('/', createCampaign)

// deleting a  workout
router.delete('/:id', deleteCampaign)

// update a  workout   
router.patch('/:id', updateCampaign)

module.exports = router