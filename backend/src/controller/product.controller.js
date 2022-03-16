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
    const products = await Product.find().lean().exec();
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
