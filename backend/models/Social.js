const Mongoose = require("mongoose");

const videoSchema = new Mongoose.Schema({
  url: { type: String },
});

const SocialSchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  facebook: String,
  whatsApp: String,
  twitter: String,
  instagram: String,
  linkdin: String,
  youtube: String,
  interest: String,
  youtubeVideo: [videoSchema],
});

module.exports = Mongoose.model("Social", SocialSchema);
