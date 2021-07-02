const Mongoose = require("mongoose");

const EcommerceSchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  ecommerce: [
    {
      productName: String,
      image: String,
      mrp: String,
      sellingPrice: String,
      description: String,
    },
  ],
});

module.exports = Mongoose.model("Ecommerce Products", EcommerceSchema);
