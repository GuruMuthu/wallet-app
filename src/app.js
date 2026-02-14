const express = require("express");
const app = express();
const cors = require("cors");
const corsOptions = require("./config/corsOption");

app.use(express.json());

app.use(cors(corsOptions));
app.use("/api/wallets", require("./routes/wallet.routes"));

app.use(require("./middleware/errorHandler"));

module.exports = app;
