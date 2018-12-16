//
// TODO
//
// APIルーターのハンドラーをここに定義して実装する
//
const {
  getProducts,
  getTotalPrice,
} = require('./product');

const fetchProducts = (req, res) => {
  const products = getProducts();
  res.json({ products });
};

const fetchTotalPrice = (req, res) => {
  const totalPriceAndIds = {};
  totalPriceAndIds.productIds = req.query.ids.split(',');
  totalPriceAndIds.total = getTotalPrice(totalPriceAndIds.productIds);
  res.json(totalPriceAndIds);
};

module.exports = {
  fetchProducts,
  fetchTotalPrice,
};
