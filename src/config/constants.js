module.exports = {
    BINANCE_STREAM:
        'wss://stream.binance.com:9443/stream?streams=btcusdt@ticker/ethusdt@ticker/bnbusdt@ticker',
    PORT: 8000,
    MAX_CONNECTIONS: 100,
    // Max 10 requests/min
    RATE_LIMIT: {
        windowMs: 60 * 1000, // 1 min
        max: 10,
        message: {
            error: 'Too many requests, please try again later.'
        }
    }

};