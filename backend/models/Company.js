const Mongoose = require("mongoose");

const CompanySchema = new Mongoose.Schema({
  userId: {
    type: Mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  firstName: {
    type: String,
    required: [true, "Please add a name"],
    trim: true,
    maxlength: [50, "Name can not be more than 50 characters"],
  },
  logo: String,
  lastName: String,
  position: String,
  phone: Number,
  companyName: {
    type: String,
  },
  whatsApp: Number,
  address: String,
  email: String,
  website: String,
  location: String,
  about: String,
  establish: String,
  nature: String,
  specialities: [],
});

module.exports = Mongoose.model("CompanyDetails", CompanySchema);
