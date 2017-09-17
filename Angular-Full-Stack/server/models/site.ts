import * as mongoose from 'mongoose';

const siteSchema = new mongoose.Schema({
  name: String,
  walletUrl: String,
  orderUrl: String,
  ordersUrl: String,
  orderDetailUrl: String,
  cancelUrl: String,
  marketBuyUrl: String,
  marketSellUrl: String,
  currencies: Array
});

const Site = mongoose.model('Site', siteSchema);

export default Site;
