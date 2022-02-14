const express = require('express');
const config = require('config');
const sequelize = require('./database');

const app = express();
const PORT = config.get('port') || 5000;

async function startServer() {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log('Что-то пошло не так: ', e.message);
        process.exit(1);
    }
}

startServer();