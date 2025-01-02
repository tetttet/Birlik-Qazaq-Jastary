const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const morgan = require('morgan'); // Для логирования запросов
const helmet = require('helmet');  // Для безопасности
const rateLimit = require('express-rate-limit'); // Защита от DDoS атак
require('dotenv').config();  // Загружаем переменные из .env файла

const app = express();
const port = process.env.PORT || 8080;

// Настройка подключения к базе данных PostgreSQL с использованием переменных из .env
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: 20, // Максимальное количество подключений
    idleTimeoutMillis: 30000, // Время бездействия
    connectionTimeoutMillis: 2000, // Время на подключение
});

// Middleware для логирования запросов
app.use(morgan('combined'));

// Middleware для безопасности
app.use(helmet());

// Ограничение запросов (ограничиваем количество запросов от одного клиента)
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 минут
    max: 100, // Максимум 100 запросов за 15 минут
    message: 'Too many requests from this IP, please try again after 15 minutes'
});
app.use(limiter);

// Разрешаем кросс-доменные запросы
app.use(cors());

// Для обработки JSON тела запроса
app.use(express.json());

// API для получения данных о баннерах
app.get('/api/banners', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, title, description, image_url, link, start_date, end_date FROM banners WHERE start_date <= CURRENT_TIMESTAMP AND (end_date IS NULL OR end_date >= CURRENT_TIMESTAMP)'
        );
        res.json(result.rows);  // Возвращаем данные в формате JSON
    } catch (err) {
        console.error('Error fetching banners:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// API для получения данных о постах
app.get('/api/past_posts', async (req, res) => {
    try {
        const result = await pool.query(
            'SELECT id, title, description, image_url, author, location, start_date, end_date, link FROM past_posts;'
        );
        res.json(result.rows);  // Возвращаем данные в формате JSON
    } catch (err) {
        console.error('Error fetching past posts:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

// API для получения переводов постов
app.get('/api/translation_post', async (req, res) => {
    const { post_id, language_code } = req.query;
    if (!post_id || !language_code) {
        return res.status(400).json({ message: 'Missing required parameters' });
    }

    try {
        const result = await pool.query(
            'SELECT title, description FROM post_translations WHERE post_id = $1 AND language_code = $2',
            [post_id, language_code]
        );
        if (result.rows.length > 0) {
            res.json(result.rows[0]);
        } else {
            res.status(404).json({ message: 'Translation not found' });
        }
    } catch (err) {
        console.error('Error fetching translation post:', err);

        // Handle permission error (code 42501)
        if (err.code === '42501') {
            res.status(403).json({ message: 'Permission denied for the table' });
        } else {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
});

// Обработчик для несуществующих маршрутов
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
