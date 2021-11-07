const express = require('express');
const conection = require('./conection_db/conectionDB')
require('dotenv').config();

const routerApi = require('./routes');
const app = express();

//Configuracion del puerto
app.set('port', process.env.PORT || 9000);

//Middleware routes
app.use(express.json())
routerApi(app)

//Mongodb conection
conection();

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`Server started on port ${app.get('port')}`);
    });
}

main();

