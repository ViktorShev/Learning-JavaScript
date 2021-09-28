const express = require('express')
const router = express.Router()
router.use(logger)

router.get('/', (req, res) => {
    console.log(req.query.name)
    res.send('user list')
})

router.get('/new', (req, res) => {
    res.render('users/new')
})

router.post('/', (req, res) => {
    const isValid = false
    if (isValid) {
        users.push({ firstName: req.body.firstName})
        res.redirect(`users/${users.length - 1}`)
    } else {
        console.log('Error')
        res.render('users/new', { firstName: req.body.firstName})
    }
})

router
    .route('/:userID')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get user with ID: ${req.params.userID}`)
    })
    .put((req, res) => {
        res.send(`Update user with ID: ${req.params.userID}`)
    })
    .delete((req, res) => {
        res.send(`Delete user with ID: ${req.params.userID}`)
    })
const users = [{ name: 'Kyle' }, { name: 'Sally' }]
router.param('userID', (req, res, next, id) => {
    req.user = users[id]
    next()
})

function logger (req, res, next) {
    console.log(req.originalUrl)
    next()
}


module.exports = router