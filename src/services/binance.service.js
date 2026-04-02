const WebSocket = require('ws');
const { BINANCE_STREAM } = require('../config/constants');
const { updatePrice } = require('./price.store');

function startBinance() {
    const ws = new WebSocket(BINANCE_STREAM);

    ws.on('open', () => console.log('Connected to Binance'));

    ws.on('message', (msg) => {
        const parsed = JSON.parse(msg);
        const data = parsed.data;

        const formatted = {
            symbol: data.s,
            price: data.c,
            changePercent: data.P,
            timestamp: data.E
        };

        updatePrice(formatted);
    });

    ws.on('close', () => {
        console.log('Reconnecting Binance...');
        setTimeout(startBinance, 1000);
    });
}

module.exports = startBinance;