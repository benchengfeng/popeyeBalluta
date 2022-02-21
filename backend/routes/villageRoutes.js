const express = require ('express');
const router = express.Router();
const VillageModel = require("../models/village");

router.get("/village", async (req, res) => {
    VillageModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });

  module.exports = router;