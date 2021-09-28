const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('posts list')
})

router.get('/newpost', (req, res) => {
    res.send('create new post form')
})


module.exports = router
