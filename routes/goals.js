const express = require("express");
const router = express.Router();
const { getGoals, addGoal, deleteGoal } = require("../controllers/goals");

router.route("/").get(getGoals).post(addGoal);

router.route("/:id").delete(deleteGoal);

module.exports = router;
