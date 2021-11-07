const mongoose = require('mongoose');

const conection = () => {
    mongoose
        .connect(process.env.MONGODB_URI)
        .then(()=>{console.log('Connected DB')})
        .catch((error)=>{console.error(error)})
};

module.exports = conection;
