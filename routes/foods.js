import express from 'express'
import Food from '../models/Food.js'
const router = express.Router()
/**
 * @api {get} /foods Request all food information
 * @apiName GetUser
 * 
 */
router.get('/', (req, res) => {
    Food.find({})
        .then(food => {
            res.json(food)
        })
})

/**
 * @api {get} /foods/:id Request a single food's information
 * @apiParam {Number} id Food's unique id
 */
router.get('/:id', (req, res) => {
    Food.find({_id: req.params.id})
        .then(food => {
            res.json(food)
        })
})

/**
 * @api {post} /foods/ Create a new food
 */
router.post('/', (req, res) => {
    let newFood = req.body
    Food.create(newFood)
        .then(res.json(newFood))
        console.log(newFood)
})

/**
 * @api {delete} /foods/:id Delete a Food using the id
 * @apiParam {Number} id Food's unique id
 */

router.delete( '/:id', (req, res) => {
    Food.findOneAndDelete({_id: req.params.id})
    .then(food => {
        res.json(food)
    })
} )
/**
 * @api {put} /foods/:id Update a single food's information by id
 * @apiParam {Number} id Food's unique id
 */
router.put('/:id', (req, res) => {
    Food.findOneAndUpdate({_id: req.params.id}, req.body)
        .then(food => {
            res.json(food);
        })
})


export default router


