const express = require("express");
const UsersController = require("../controller/Users");

const controller = new UsersController();
const router = express.Router();

router.get("/:id", controller.get);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
