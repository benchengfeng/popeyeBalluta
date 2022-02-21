const express = require ('express');
const router = express.Router();
const LunchModel = require("../models/lunch");

router.get("/lunch", async (req, res) => {
    LunchModel.find({}, (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);

      }
    });
  });

  module.exports = router;