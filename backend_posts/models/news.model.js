const mongoose = require("mongoose");

const newsschema = mongoose.Schema(
  {
    title: String,
    desc: String,
    createdby: {
      type: mongoose.SchemaTypes.ObjectId,
      ref:'user'
    }
  },
  {
    timestamps: true,
  }
);

const newsModel = mongoose.model("news", newsschema);

module.exports = newsModel;
