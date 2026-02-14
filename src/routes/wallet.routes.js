const express = require("express");
const router = express.Router();
const walletController = require("../controllers/wallet.controller");

router.post("/", walletController.createWallet);
router.get("/", walletController.getWallets);
router.post("/:id/deposit", walletController.deposit);
router.post("/:id/withdraw", walletController.withdraw);

module.exports = router;
