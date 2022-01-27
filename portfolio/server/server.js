const express = require('express')
const router = express.Router()
const path = require('path')
const cors = require('cors')
const nodemailer = require('nodemailer')
require('dotenv').config({
  path: path.resolve(process.cwd(), 'client', '.env.development'),
  debug: true,
})

const PORT = process.env.PORT || 3001
const PASSWORD = process.env.REACT_APP_PASSWORD
console.log(PASSWORD)

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.use(express.static('public'))
app.post('/', (req, res) => {
  console.log(req.body)

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bluebassboy22@gmail.com',
      pass: PASSWORD,
    },
  })

  const mailOptions = {
    from: req.body.email,
    to: 'kevin@kevinshank.tech',
    subject: `Message from ${req.body.email}: ${req.body.firstName} ${req.body.lastName}`,
    text: `${req.body.phone} ${req.body.message}`,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error)
      res.send('error')
    } else {
      console.log('Email sent: ' + info.response)
      res.send('success')
    }
  })
})
//hello
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')))
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`))
