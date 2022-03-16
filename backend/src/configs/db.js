const mongoose = require("mongoose");

module.exports = async () => {
  await mongoose.connect(
    "mongodb+srv://raman:raman@cluster0.kpuis.mongodb.net/happycredit"
  );
};
