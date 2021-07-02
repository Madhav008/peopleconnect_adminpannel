const Mongoose = require("mongoose");

const linkSchema = new Mongoose.Schema({
  companyUrl: {
    type: String,
    required: [true, "Add Company Name"],
    trim: true,
    unique: true,
  },

  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
});

module.exports = Mongoose.model("Link", linkSchema);
