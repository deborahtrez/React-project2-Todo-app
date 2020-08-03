const express = require ('express')
const router = express.Router()
const users = require('../models/users')
const {signupChecks, loginChecks} = require('../authValidation')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/signup', async (request, response ) =>{
    
    //validate individual fields in signup form
    const {error} = signupChecks(request.body)
    if(error) {
        return response.status(400).send(error.details[0].message)
    }

    //no one person with the same email should be able to sign up
    const existingEmail = await users.findOne({email : request.body.email})
    if (existingEmail) {
        return response.status(400).send('Email already exists')
    }

    //salting our hashed password (for security)
    const saltPassword = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(request.body.password, saltPassword)

    const user = new users({
        fullName: request.body.fullName,
        gender: request.body.gender,
        email: request.body.email,
        password: hashedPassword
    })
    user.save()
    .then(users => {response.json(users)})
    .catch(error => {response.json(error)})
})

//login
router.post('/login', async (request, response) => {
    //validate fields
    const {error} = loginChecks(request.body)
    if(error) {
        return response.status(400).send(error.details[0].message)
    }

    //search for entered email in the database
    const appUser = await users.findOne({email : request.body.email})
    if (!appUser) {
        return response.status(400).send('Cannot find email')
    }

    //crosscheck entered password of appUser
    const correctPassword = await bcrypt.compare(request.body.password, appUser.password)
    if(!correctPassword) {
        return response.status(400).send('Incorrect password')
    }

    const sessToken = jwt.sign({_id:appUser.id}, process.env.TOKEN)
    response.header('authentication-id', sessToken).send(sessToken)

    response.send('logged in successfully')
})

module.exports = router