const moongose = require('mongoose');

const productSchema = moongose.Schema({
    name:{
        type: String,
        required: true
    },
    referencia:{
        type: Number,
        required: true
    }
});

module.exports = moongose.model('product', productSchema);