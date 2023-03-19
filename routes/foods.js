import express from 'express'
import Food from '../models/Food.js'
const router = express.Router()

router.get('/', (req, res) => {
    Food.find({})
        .then(food => {
            res.json(food)
        })
})

export default router