const Mongoose  = require("mongoose");

const ContactSchema = new Mongoose.Schema({
    name:String,
    mobile:Number,
    email:String,
    message:String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref: "User"
    },
});

module.exports= Mongoose.model('ContactDetails', ContactSchema)