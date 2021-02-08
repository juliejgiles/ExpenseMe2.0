const Goal = require("../models/Goal");

//get all goals
//route GET /api/v1/goals
exports.getGoals = async (req, res, next) => {
  try {
    const goals = await Goal.find();
    return res.status(200).json({
      success: true,
      count: goals.length,
      data: goals,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//Add goals
//route POST /api/v1/goals
exports.addGoal = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const goal = await Goal.create(req.body);

    return res.status(201).json({
      success: true,
      data: goal,
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
    }
  }
};

//delete a goal
//route DELETE /api/v1/goals/:id
exports.deleteGoal = async (req, res, next) => {
  try {
    const goal = await Goal.findById(req.params.id);

    await goal.remove();

    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};
