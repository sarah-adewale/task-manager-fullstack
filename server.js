const express = require('express') //adds express
const app = express() //attaches express tp app variable
const mongoose = require('mongoose') //mongodb object for the database schema
const passport = require('passport')// for authentication
const session = require('express-session') //to store login sessions
const MongoStore = require('connect-mongo') //stores login session to database
const flash = require('express-flash') //flashes error messages
const logger = require('morgan') //helps with writing log lines ?
const connectDB = require('./config/database') //adds database file located in config folder
const mainRoutes = require('./routes/main')

require('dotenv').config({path: './config/.env'})


//passport config
require('./config/passport')(passport)

//calls the database
connectDB()


app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )
   

//middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

//routes
app.use('/', mainRoutes)


//listen on local port in env file
app.listen(process.env.PORT, () => {
    console.log('Server is running, better go catch it!')
})