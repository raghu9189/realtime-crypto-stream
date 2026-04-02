const WebSocket = require('ws');
const { getAllPrices } = require('../services/price.store');
const { MAX_CONNECTIONS } = require('../config/constants');

let clients = new Set();

function initWebSocket(server) {
    const wss = new WebSocket.Server({ noServer: true });

    server.on('upgrade', (req, socket, head) => {
        if (req.url === '/ws') {
            if (clients.size >= MAX_CONNECTIONS) {
                socket.write('HTTP/1.1 429 Too Many Requests');
                socket.destroy();
                return;
            }

            wss.handleUpgrade(req, socket, head, (ws) => {
                wss.emit('connection', ws);
            });
        } else {
            socket.destroy();
        }
    });

    wss.on('connection', (ws) => {
        clients.add(ws);
        console.log(`Client connected (${clients.size})`);

        ws.send(JSON.stringify(getAllPrices()));

        ws.on('close', () => {
            clients.delete(ws);
            console.log(`Client disconnected (${clients.size})`);
        });
    });

    return {
        broadcast: (data) => {
            clients.forEach((client) => {
                if (client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(data));
                }
            });
        }
    };
}

module.exports = initWebSocket;