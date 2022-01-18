const express = require('express')
const Router = express.Router()
const mongodb = require('mongodb')
const mongoose = require('mongoose')
const Contact = require('../models/contact')

Router.get('/', (req, res, next) => {
    res.render('home')
})

Router.post('/send', (req, res, next) => {
    const { name, email, subject, message } = req.body;

    const contactMessage = new Contact({
        name,
        email,
        subject,
        message
    })

    contactMessage.save()
    .then(result => {
        res.render('redirect')
    }).catch(err => {
        res.send('Sorry! Something went wrong')

    })
})

Router.get('*', (req, res, next) => {
    res.render('home')
})
module.exports = Router