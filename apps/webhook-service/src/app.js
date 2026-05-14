const express = require('express');
const cors = require('cors');
const webhookRoutes = require('./routes/webhookRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/webhooks', webhookRoutes);

module.exports = app;