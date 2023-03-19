import Food from '../models/Food.js'
import foodData from './foods.json' assert { type: "json" }

Food.deleteMany()

Food.create(foodData)
    .then(food => {
        console.log(food)
    })
    .catch(err => {
        consol.log(err)
    })