const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 1,
    max: 20,
  },
  password: {
    type: String,
    required: true,
    min: 1,
    max: 2000,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User
