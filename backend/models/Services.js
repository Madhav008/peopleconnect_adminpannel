const Mongoose = require("mongoose");

const ServiceSchema = new Mongoose.Schema({
  image: { type: String },
  title: { type: String },
});

const ServicesSchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  service: [ServiceSchema],
});

module.exports = Mongoose.model("Services ", ServicesSchema);
