const express = require("express");
const UsersController = require("../controller/Users");
const verifyToken = require("../middlewares/verifyToken");

const controller = new UsersController();
const router = express.Router();

router.get("/:id", verifyToken, controller.get);
router.post("/", controller.post);
router.put("/:id", verifyToken, controller.put);
router.delete("/:id", verifyToken, controller.delete);

module.exports = router;
