const express = require("express");

const router = express.Router();

const Product = require("../model/product.model");

router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      AddedProduct: product,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Failed",
      error: err.message,
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const page = +req.query.page || 1;
    const size = +req.query.size || 12;
    const offset = (page - 1) * size;
    const products = await Product.find()
      .skip(offset)
      .limit(size)
      .lean()
      .exec();
    res.status(200).json({
      AllProducts: products,
    });
  } catch (err) {
    res.status(500).json({
      Status: "Failed",
      error: err.message,
    });
  }
});

module.exports = router;
