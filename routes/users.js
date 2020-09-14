const express = require("express");
const router = express.Router();

const userController = require("../controllers/users");

router.route("/").get(userController.getAll);

module.exports = router;
