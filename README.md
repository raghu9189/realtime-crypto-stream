# Crypto Price WebSocket Project

### 🚀 Live Demo
- **WebSocket Endpoint:** `wss://realtime-crypto-stream.onrender.com/ws`
- **REST API Endpoint:** [https://realtime-crypto-stream.onrender.com/price](https://realtime-crypto-stream.onrender.com/price)

> **Note:** This app is deployed on Render's free tier. If the server has been asleep, the very first API hit or WebSocket connection might take up to 30-50 seconds to start. After that, it will be instant!

This is my assignment to fetch live crypto prices from Binance and share them using a local WebSocket server.

## What I did
- Connected to Binance's WebSocket API to get live prices.
- Created my own local WebSocket server.
- Extract and save the exact details needed: Symbol, Last price, 24h change, and Timestamp.
- Broadcast these live updates to any connected clients.
- Handled client connections and disconnections gracefully.

## Bonus Features I added
- Fetching multiple pairs: BTC/USDT, ETH/USDT, and BNB/USDT.
- A REST API endpoint (`GET /`) to get the latest prices as JSON.
- Added rate limiting for the API (max 10 requests per minute).
- Added a connection limit for WebSockets (max 100 clients).
- Containerized the app using Docker.

## How to run it

**Normal way:**
```bash
npm install
npm start
```
*Server runs on port 8000*

**Using Docker:**
```bash
docker build -t crypto-app .
docker run -p 8000:8000 -d crypto-app
```
