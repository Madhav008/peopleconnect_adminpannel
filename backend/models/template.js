const Mongoose  = require("mongoose");

const TemplateSchema = new Mongoose.Schema({
        image:String,
        name:String,
});

module.exports= Mongoose.model('Template', TemplateSchema)