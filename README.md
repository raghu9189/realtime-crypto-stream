# Realtime Crypto Stream

A simple Node.js app to get live crypto prices.

## What we did:
1. **Live Prices**: Connects to Binance to get live prices for BTC, ETH, and BNB.
2. **WebSocket Server**: Sends live prices to clients. It limits users to 100 connections.
3. **Web API**: A simple API to get current prices. It blocks users who make more than 10 requests per minute.
4. **Docker**: Added a `Dockerfile` and `.dockerignore` so you can easily run the app in Docker.
5. **Clean Code**: Added `.gitignore` to hide files like `node_modules`.

## How to run it

### 1. Run with Node:
```bash
npm install
npm start
```

### 2. Run with Docker:
```bash
docker build -t crypto-app .
docker run -p 8000:8000 -d crypto-app
```
