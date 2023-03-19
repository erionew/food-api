import express from 'express'
import Food from '../models/Food.js'
const router = express.Router()

router.get('/', (req, res) => {
    Food.find({})
        .then(food => {
            res.json(food)
        })
})

router.get('/:id', (req, res) => {
    Food.find({_id: req.params.id})
        .then(food => {
            res.json(food)
        })
})

router.post('/', (req, res) => {
    let newFood = req.body
    Food.create(newFood)
        .then(res.json(newFood))
        consol.log(newFood)
})

router.delete( '/:id', (req, res) => {
    Food.findOneAndDelete({_id: req.params.id})
    .then(food => {
        res.json(food)
    })
} )


export default router


