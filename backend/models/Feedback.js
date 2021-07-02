const Mongoose = require("mongoose");

const FeedbackSchema = new Mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },
    name:String,
    feedback:String,
    star:String,
    date:Date
},{
    timestamps: true,
  });

module.exports = Mongoose.model('Feedbacks Products', FeedbackSchema)