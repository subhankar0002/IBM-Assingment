const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, '../products.json');

const readProducts = () => {
    if (!fs.existsSync(filePath)) return [];
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
};

const writeProducts = (products) => {
    fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
};

module.exports = { readProducts, writeProducts };