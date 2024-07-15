const mongoose = require("mongoose");
const { Schema } = mongoose;

const wonderlandSectionModel = new Schema({
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  imgUrl: { type: String, required: true },
});

module.exports = mongoose.model("WonderlandSection", wonderlandSectionModel);
