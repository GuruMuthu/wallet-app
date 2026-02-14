const Wallet = require("../models/wallet.model");

const createWallet = async (data) => {
  return await Wallet.create(data);
};

const getWallets = async () => {
  return await Wallet.find();
};

const deposit = async (id, amount) => {
  const wallet = await Wallet.findById(id);
  if (!wallet) throw new Error("Wallet not found");

  wallet.balance += amount;
  return await wallet.save();
};

const withdraw = async (id, amount) => {
  const wallet = await Wallet.findById(id);
  if (!wallet) throw new Error("Wallet not found");

  if (wallet.balance < amount) throw new Error("Insufficient balance");

  wallet.balance -= amount;
  return await wallet.save();
};

module.exports = {
  createWallet,
  getWallets,
  deposit,
  withdraw
};
