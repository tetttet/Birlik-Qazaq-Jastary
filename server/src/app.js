const express = require('express');
const app = express();
const slideRoutes = require('./routes/slideRoutes');

// Настройка middleware
app.use(express.json());

// Подключаем маршруты
app.use(slideRoutes);

// Ошибка 404
app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
