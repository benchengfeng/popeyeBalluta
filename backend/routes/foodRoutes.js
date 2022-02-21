const express = require ('express');
const router = express.Router();
const FoodModel = require("../models/food");

router.get("/food", async (req, res) => {
 
    FoodModel.find({}, (err, result) => {
       if (err) {
           res.send(err);
         } else {
           res.send(result);

         }
       });
});

module.exports = router;