const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD, {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        port: process.env.DB_PORT,
        dialectOptions: {
            ssl: {
                require: true, // Requer SSL
                rejectUnauthorized: false // Evita rejeição de certificados autoassinados
            }
        },
    }
);

sequelize.authenticate()
    .then(() => console.log('Conectado ao PostgreSQL com SSL'))
    .catch(err => console.error('Erro ao conectar ao banco de dados:', err));

module.exports = sequelize;