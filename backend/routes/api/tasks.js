const express = require("express");
const router = express.Router();
const Task = require("../../models/User");
const User = require("../../models/User");

router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.put("/", async (req, res) => {
  const { username, password, tasks } = req.body;

  try {
    const user = await User.findOneAndUpdate(
      { username, password },
      { $set: { tasks } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "Tasks updated successfully", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
