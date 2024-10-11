// Importa o Express
const express = require('express');
const dotenv = require('dotenv');

// Carrega variáveis de ambiente
dotenv.config();

// Inicializa o app Express
const app = express();

// Middleware para JSON
app.use(express.json());

// Rota simples de teste
app.get('/', (req, res) => {
  res.send('API está rodando...');
});

// Configura a porta do servidor
const PORT = process.env.PORT || 5000;

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
