const express = require('express');
const {
  fetchProducts,
  fetchTotalPrice,
} = require('./controller');

const setup = (app) => {
  const apiRouter = express.Router();

  //
  // TODO
  //
  // apiRouter にAPIルートとハンドラーを設定する
  //

  apiRouter.get('/products', fetchProducts);
  apiRouter.get('/price', fetchTotalPrice);

  app.use('/api', apiRouter);
};

module.exports = setup;
