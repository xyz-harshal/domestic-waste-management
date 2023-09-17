const userModel = require('../models/userModel');
const brcypt = require('bcrypt');
const validator = require('validator');
const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, {expiresIn: "1h"});
}

async function login(req, res) {
    const { username, password } = req.body;
    try {
        //validations
        if (!username || !password) {
            throw Error('All fields must be filled')
        }

        const user = userModel.findOne({username: username})
        .then(user => {
            if(!user){
                throw Error("Username does not exist")
            }

            brcypt.compare(password, user.password)
            .then(result => {
                if(result){
                    const token = createToken(user._id);
                    res.status(200).json({username, token});
                }
                else{
                    throw Error("Invalid Password");
                }
            })
        })
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

async function register(req, res) {
    const { username, password } = req.body;
    try{
        //validations
        if (!username || !password) {
            throw Error('All fields must be filled')
        }        
    
        const exist = userModel.findOne({ username: username })
            .then((user) => {
                if (user) {
                    throw Error("Username already in use")
                }
            })
        //Hashing
        const salt = await brcypt.genSalt(10);
        brcypt.hash(password, salt)
            .then(async (hash) => {
                const user = new userModel({
                    username: username,
                    password: hash
                })
    
                await user.save().then((user) => {
                    const token = createToken(user._id);

                    res.status(200).json({username, token});
                }).catch((error) => {
                    console.log(error);
                    res.status(400).json({ error: "Not saved" });
                })
            })
    }
    catch(error){
        res.status(400).json({error: error.message})
    }

}

module.exports = {
    login,
    register
}