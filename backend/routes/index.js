const express = require('express');
const router = express.Router();

const productsRouter = require('./productsRouter');

const routerApi = app => {
    app.use('/api/v1', router);
    router.use('/products', productsRouter)
}

module.exports = routerApi;