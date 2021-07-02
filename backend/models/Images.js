const mongoose = require("mongoose");




const ImagesSchema = new mongoose.Schema({
  images: [],
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref: "User"
},
});

module.exports = mongoose.model("Images", ImagesSchema);
