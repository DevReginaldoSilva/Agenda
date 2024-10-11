const express = require('express');
const dotenv = require('dotenv');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const serviceRoutes = require('./routes/serviceRoutes');

dotenv.config();

const app = express();

// Middlewares
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/services', serviceRoutes);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    sequelize.sync(); // Sincroniza o banco de dados
});
