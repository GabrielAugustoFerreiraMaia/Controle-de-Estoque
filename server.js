const express = require('express');
const sequelize = require('./config/database');
const productRoutes = require('./routes/productRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('API de Controle de Estoque rodando com PostgreSQL');
});

// Usar rotas de produtos
app.use('/api', productRoutes);

// Sincronizar o banco de dados e iniciar o servidor
sequelize.sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor rodando na porta ${PORT}`);
        });
    })
    .catch(err => console.error('Erro ao sincronizar banco de dados:', err));