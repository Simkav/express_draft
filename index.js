const express = require('express')
const helmet = require('helmet')
const compression = require('compression')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(helmet())
app.use(compression())
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.get('/', (req, res, next) => {
  res.status(200).end('Bye')
})

app.listen(8001, () => {
  console.log('server started')
})
