const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');
const db = require('../util/database')
const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/products', (req, res) => {
    const sqlQuery = 'SELECT * FROM products';
    db.execute(sqlQuery)
        .then(results => {
            res.render('products', { products: results[0] });
        })
        .catch(error => {
            console.error(error);
            res.status(500).send('Internal Server Error');
        });
});
router.get('/products/:productId', shopController.getProduct);


router.get('/cart', shopController.getCart);

router.post('/cart', shopController.postCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
