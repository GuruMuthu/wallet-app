const Wallet = require("../models/wallet.model");

const createWallet = async (data) => {
  const wallets = await getWallets();
  const userExistingUserOrNot = wallets.find((accountDetails) => accountDetails.name == data.name);
  const userPhoneNumberexistingOrNot = wallets.find((accountDetails) => accountDetails.phoneNumber == data.phoneNumber);
  if (!data.name) {throw new Error(`User name is required.`)};
  if (!data.phoneNumber) {throw new Error(`User phone number is required.`)};
  if (userExistingUserOrNot && userPhoneNumberexistingOrNot) {throw new Error(`Account already exists with the provided Name: '${data.name}' and Phone Number: '${data.phoneNumber}'. Please use a different name and phone number.`)};
  if (userExistingUserOrNot) {throw new Error(`Account already exists with the provided Name: '${data.name}'. Please use a different phone number.`)};
  if (userPhoneNumberexistingOrNot) {throw new Error(`Account already exists with the phone number '${data.phoneNumber}'. Please use a different phone number.`)};
  return await Wallet.create(data);
};

const getWallets = async () => {
  return await Wallet.find();
};

const deposit = async (id, points) => {
  const wallet = await Wallet.findByIdAndUpdate(
    id,
    { $inc: { points: points } },
    { returnDocument: "after" }
  );

  if (!wallet) throw new Error("Account not found");

  return wallet;
};

const withdraw = async (id, points) => {
  const wallet = await Wallet.findOneAndUpdate(
    { _id: id, points: { $gte: points } },
    { $inc: { points: -points } },
    { returnDocument: "after" }
  );
   if (wallet.points < points) throw new Error(`Insufficient points. Available points is '${wallet.points}', but attempted withdrawal points is '${points}'.`);

  return wallet;
};



module.exports = {
  createWallet,
  getWallets,
  deposit,
  withdraw
};
