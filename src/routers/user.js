const express = require('express');
const bcrypt = require('bcrypt');
const router = new express.Router()
const {connection, mysql} = require('../db/sql')

router.get('/demo', (req, res) => {
    res.send('hello world')
})

router.post('/api/login', (req, res) => {
    var uname = req.body.username
    var pwd = req.body.password
    connection.query(`select * from user where useremail="${uname}"`, async (err, results, field) => {
        if (err) {
            console.log(err)
       } else {
        const match = await bcrypt.compare(pwd, results[0].password);
        if (match) {
            res.render('welcome.hbs', {"user" : req.body.username})
        } else {
            res.status(400).send({
                "error": "pwd does not match"
            })
        }
       }
    })
    
    console.log(req.body.username)
})

router.post('/api/signup', async (req, res) => {
    var epwd = await bcrypt.hash(req.body.password, 8)
    var uname = req.body.username
    connection.query(`insert into user values ("${uname}", "${epwd}")`, (error, results, field)=>{
        if (error) {
             console.log(error)
        } else {
            res.render('login.hbs')
        }
    })
})

module.exports = router