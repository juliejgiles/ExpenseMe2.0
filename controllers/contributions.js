const Contribution = require("../models/Contribution");

//get all contributions
//route GET /api/v1/contributions
exports.getContributions = async (req, res, next) => {
  try {
    const contributions = await Contribution.find();
    return res.status(200).json({
      success: true,
      count: contributions.length,
      data: contributions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

//Add contributions
//route POST /api/v1/contributions
exports.addContribution = async (req, res, next) => {
  try {
    const { text, amount } = req.body;

    const contribution = await Contribution.create(req.body);

    return res.status(201).json({
      success: true,
      data: contribution,
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

//delete a contribution
//route DELETE /api/v1/contributions/:id
exports.deleteContribution = async (req, res, next) => {
  try {
    const contribution = await Contribution.findById(req.params.id);

    if (!contribution) {
      return res.status(404).json({
        success: false,
        error: "No contribution found",
      });
    }

    await contribution.remove();

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
