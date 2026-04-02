const http = require('http');
const express = require('express');
const rateLimit = require('express-rate-limit');
const startBinance = require('./services/binance.service');
const initWebSocket = require('./websocket/ws.server');
const priceRoutes = require('./api/price.routes');
const { getAllPrices } = require('./services/price.store');
const { PORT, RATE_LIMIT } = require('./config/constants');

const app = express();

// Rate limiting
const limiter = rateLimit(RATE_LIMIT);
app.use(express.json());
app.use(limiter);
app.use('/', priceRoutes);

const server = http.createServer(app);

// Init WS
const wsServer = initWebSocket(server);

// Start Binance
startBinance();

// Broadcast loop (simple approach)
setInterval(() => {
    wsServer.broadcast(getAllPrices());
}, 1000);

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});