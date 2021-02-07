const express = require("express");
const router = express.Router();
const {
  getContributions,
  addContribution,
  deleteContribution,
} = require("../controllers/contributions");

router.route("/").get(getContributions).post(addContribution);

router.route("/:id").delete(deleteContribution);

module.exports = router;
