const express = require('express')
const hbs = require('hbs')
const app = express()
const bodyParser = require('body-parser')
require('./db/sql')
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({extended: false}))

const user = require('./routers/user')
const website = require('./routers/website')

app.use(user)
app.use(website)



app.listen(3000, () => {
    console.log('server is running')
})