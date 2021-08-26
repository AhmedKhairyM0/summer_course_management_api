const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const courseRouter = require('./routes/courseRoutes')

const app = express()

app.use(express.json())

const DB = process.env.DATABASE
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB Connection Successfull')
    const port = process.env.PORT || 3000
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`)
    })
  })

// Routes
app.use('/api/v1/courses', courseRouter)

app.all('*', (req, res, next) => {
  res.status(404).json({
    status: 404,
    message: `Not Found, Can't find ${req.originalUrl}`,
    api: '/api/v1/courses',
  })
})
