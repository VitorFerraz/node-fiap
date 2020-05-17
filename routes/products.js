const express = require("express");
const ProductsController = require("../controller/Products");

const controller = new ProductsController();
const router = express.Router();

router.get("/", controller.get);
router.get("/:id", controller.get);
router.post("/", controller.post);
router.put("/:id", controller.put);
router.delete("/:id", controller.delete);

module.exports = router;
