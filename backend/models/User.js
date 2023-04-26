const mongoose = require("mongoose");

// Task Schema Model:
const taskSchema = new mongoose.Schema({
  id: { type: String, required: true },
  text: { type: String, required: true },
  time: { type: String, required: true },
});

// User Schema Model:
const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  tasks: { type: [taskSchema], required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
