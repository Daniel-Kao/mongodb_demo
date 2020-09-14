const User = require("../models/user");

exports.getAll = async (req, res, next) => {
  const results = await User.find();

  console.log(results);
  res.status(200).json({
    status: "success",
    results: results.length,
    data: {
      results,
    },
  });
};
