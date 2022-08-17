const express = require('express') //adds express to file
const router = express.Router() //add router to file
const authController = require('../controllers/auth') //adds auth file in controllers folder
const homeController = require('../controllers/home') //adds home file in controllers folder
const { ensureAuth, ensureGuest } = require('../middleware/auth') //object destructuring; adds the auth file in middleware folder



router.get('/', homeController.getIndex) // makes a get request to the root route in home controller(home-page)
router.get('/login', authController.getLogin) //makes a get request to the login route in the controllers auth file
router.post('/login', authController.postLogin) //makes a post request to the login route in the auth file
router.get('/logout', authController.logout) //makes a get request to the login route in the auth file
router.get('/signup', authController.getSignup) //makes a get request to the signup route in the auth file
router.post('/signup', authController.postSignup) //makes a post request to the signup route in the auth file

module.exports = router //exports router for use elsewhere