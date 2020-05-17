// const app = require(".././server");
const express = require("express");

// Rotas:
const auth = require("./auth");
const users = require("./users");
const products = require("./products");
const invalid404 = require("./invalid404");
const verifyToken = require("../middlewares/verifyToken");

const router = express.Router();

router.use("/auth", auth);
router.use("/users", users);
router.use("/products", verifyToken, products);
router.use("*", invalid404);

router.use((err, req, res, next) => {
    err.statusCode = 500;
    err.status = 'internal server error, please try again';
    err.message = 'internal server error, please try again';

    res.status(err.statusCode).json({
      status: err.status,
      message: err.message
    });
  });
  

module.exports = router;
