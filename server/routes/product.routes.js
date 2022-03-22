const ProductsController = require("../controllers/product.controller")

module.exports = (app) =>{
    app.get('/api/products',ProductsController.findAllProducts)
    app.post('/api/products', ProductsController.createProduct)
    app.get('/api/products/:id', ProductsController.findOneProduct)
}