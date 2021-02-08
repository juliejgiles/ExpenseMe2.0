const mongoose = require("mongoose");

const GoalSchema = new mongoose.Schema({
  text: {
    type: String,
    trim: true,
    required: [true, "Please add a new goal"],
  },
  amount: {
    type: Number,
    required: [true, "Please add a number"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Goal", GoalSchema);
