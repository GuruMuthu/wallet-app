const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/wallets", require("./routes/wallet.routes"));

app.use(require("./middleware/errorHandler"));

module.exports = app;
