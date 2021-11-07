const express = require('express');
const productSchema = require('../models/productSchema')
const router = express.Router();

//Create product
router.post('/', (req, res) => {
    try {
        const product = productSchema(req.body);
        product
            .save()
            .then((data)=> res.json(data))
            .catch((error)=> res.json({message: error}));     
    } catch (error) {
        res.status(404).json({
            message: error.message
          });  
    }
  
});

//Obtener todos los products
router.get('/', (req, res) => {
    try {
        productSchema
        .find()
        .then((data)=> res.json(data))
        .catch((error)=> res.json({message: error}));        
    } catch (error) {
        res.status(404).json({
            message: error.message
          }); 
    }

});

//obtener un product por id
router.get('/:id', (req, res) => {
    try {
        const { id } = req.params
        productSchema
            .findById(id)
            .then((data)=> res.json(data))
            .catch((error)=> res.json({message: error}));       
    } catch (error) {
        res.status(404).json({
            message: error.message
          });         
    }

});

//Editar un producto
router.put('/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { name, referencia } = req.body;
        productSchema
            .updateOne({_id: id}, { $set: {name, referencia} })
            .then((data)=> res.json(data))
            .catch((error)=> res.json({message: error}));        
    } catch (error) {
        res.status(404).json({
            message: error.message
          });        
    }

});

//Borrar un usuario
router.delete('/:id', (req, res) => {
    try {
        const { id } = req.params;
        productSchema
            .deleteOne({_id: id})
            .then((data)=> res.json(data))
            .catch((error)=> res.json({message: error}));        
    } catch (error) {
        res.status(404).json({
            message: error.message
          });         
    }

});

module.exports = router;