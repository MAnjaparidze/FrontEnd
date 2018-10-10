const express = require('express');
const router = express.Router();

let products = [
    { price: 10000000000000, title: "Apple" },
    { price: 10000000000, title: "Google" },
    { price: 12323523541, title: "Nokia" }
]
router.get('/', (req, res) => {
    res.render('products/index', { title: "Products Page", products })
})

router.get('/:id(\\d)', (req, res) => {
    // res.send(id)
    res.render('products/detail', { title: `product - ${id}`})
})

router.get('/add', (req, res) => {
    res.json({ message: "Products Add Page" })
})

module.exports = router;