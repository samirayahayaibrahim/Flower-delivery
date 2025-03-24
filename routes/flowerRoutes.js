const express = require('express')
const upload = require('../config/multerConfig');
// const image = require('.../uploads/Image');
const {
    createFlower,
    getFlower,
    getFlowers,
    deleteFlower,
    updateFlower
} = require('../controllers/flowerController')


const router = express.Router()



router.get('/', getFlowers)

router.get('/:id', getFlower)

router.post('/', createFlower)

router.delete('/:id', deleteFlower)

router.patch('/:id', updateFlower)


module.exports = router