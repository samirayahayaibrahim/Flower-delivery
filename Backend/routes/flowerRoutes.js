const express = require('express')
const upload = require('../config/multerConfig');
// const multerConfig = require('../uploads');
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

router.post('/', upload.single("image"), createFlower)

router.delete('/:id', deleteFlower)

router.patch('/:id', upload.single("image"), updateFlower)


module.exports = router