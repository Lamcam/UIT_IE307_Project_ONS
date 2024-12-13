const auth = require("./authRoutes");
const product = require("./productRoutes");
const cart = require("./cartRoutes");
const order = require("./orderRoutes");
const account = require("./accountRoutes");
const voucher = require("./voucherRoutes")
const notification = require("./notificationRoutes")
const chat = require("./chatRoutes")

const route = (app) => {
  app.use("/api/products", product);
  app.use("/api/auth", auth);
  app.use("/api/accounts", account);
  app.use("/api/carts", cart);
  app.use("/api/orders", order);
  app.use("/api/vouchers", voucher)
  app.use("/api/notifications", notification)
  app.use("/api/chat", chat)
};

module.exports = route;
