const walletService = require("../services/wallet.service");

const createWallet = async (req, res, next) => {
  try {
    const wallet = await walletService.createWallet(req.body);
    res.status(201).json(wallet);
  } catch (err) {
    next(err);
  }
};

const getWallets = async (req, res, next) => {
  try {
    const wallets = await walletService.getWallets();
    res.json(wallets);
  } catch (err) {
    next(err);
  }
};

const deposit = async (req, res, next) => {
  try {
    const wallet = await walletService.deposit(req.params.id, req.body.amount);
    res.json(wallet);
  } catch (err) {
    next(err);
  }
};

const withdraw = async (req, res, next) => {
  try {
    const wallet = await walletService.withdraw(req.params.id, req.body.amount);
    res.json(wallet);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createWallet,
  getWallets,
  deposit,
  withdraw
};
