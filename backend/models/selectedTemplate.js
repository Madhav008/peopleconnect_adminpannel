const Mongoose = require("mongoose");

const SelectedTemplateSchema = new Mongoose.Schema(
  {
    userId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    TemplateId: {
      type: Mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Template",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model("SelectedTemplate", SelectedTemplateSchema);
