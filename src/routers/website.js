const express = require('express');

const router = new express.Router()

router.get('/login', (req, res) => {
    res.render('login.hbs')
})

router.get('/welcome', (req, res) => {
    res.render('welcome.hbs', {"user" : "mite"})
})

router.get('/signup', (req, res) => {
    res.render('signup.hbs')
})
module.exports = router