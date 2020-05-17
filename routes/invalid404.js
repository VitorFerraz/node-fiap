const express = require('express');
const Invalid404 = require("../controller/Invalid404");

const controller = new Invalid404();
const router = express.Router();
router.use("*", controller.invalidRoute)


module.exports = router;