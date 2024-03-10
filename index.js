const express = require('express');
const database = require('./databaseConnection/initializeDatabase');
const bodyParser = require('body-parser');
const routes = require('./routes');

const StartServer = async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use('/', routes);
    app.listen(5000, () => {
        console.log(`listening to port 5000`);
    })
}
StartServer();