const mongoose = require("mongoose");

const villageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  coordinates: {
    type: Array,
    required: false,
  },
});

const VillageModel = mongoose.model("village", villageSchema);
module.exports = VillageModel;
