//const Product = require('../models/product');

const express = require('express');
const cors= require('cors');
const app = express();
const adminController = require('../controllers/admin');

const router = express.Router();
app.use(cors());
router.get('/edit-product/:productId', (req, res) => {
    // Extract productId from the request parameters
    const productId = req.params.productId;
  
    // Retrieve the product with the given ID from your data source
    Product.findById(productId)
      .then(product => {
        // Check if the product exists
        if (!product) {
          // Handle the case where the product with the given ID is not found
          return res.status(404).send('Product not found');
        }
  
        // Render the edit-product page and pass the product data to the template
        res.render('admin/edit-product', {
          pageTitle: 'Edit Product',
          path: '/admin/edit-product',
          product: product,
        });
      })
      .catch(error => {
        // Handle errors, for example, by redirecting to an error page
        res.status(500).send('Internal Server Error');
      });
  });


// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);

// POST edit product
router.post('/edit-product', adminController.postEditProduct);
router.post('/delete-product/:productId', adminController.deleteProduct);


module.exports = router;
