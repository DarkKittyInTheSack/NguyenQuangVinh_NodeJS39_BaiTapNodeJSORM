import express from 'express'
import foodRoute from './foodRoute.js'

const mainRoute = express.Router()
mainRoute.use('/food',foodRoute)

export default mainRoute