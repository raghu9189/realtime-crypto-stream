const prices = {};

function updatePrice(data) {
    prices[data.symbol] = data;
}

function getPrice(symbol) {
    return prices[symbol];
}

function getAllPrices() {
    return prices;
}

module.exports = {
    updatePrice,
    getPrice,
    getAllPrices
};