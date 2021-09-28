const { Client } = require('pg')
const express = require('express')
const { restart } = require('nodemon')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const pgClient = new Client({
    user: 'postgres',
    password: 'admin',
    database: 'js_website_db',
    host: 'localhost',
    port: 5432

})


const userRouter = require('./routes/users.js')
const postsRouter = require('./routes/posts.js')

app.use('/users', userRouter)
app.use('/posts', postsRouter)


// SERVER START
app.listen(8000) 