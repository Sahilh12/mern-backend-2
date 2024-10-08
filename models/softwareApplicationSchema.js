const mongoose = require('mongoose')

const softwareApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Application name is required"]
  },
  svg: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
});

module.exports = mongoose.model("SoftwareApplication", softwareApplicationSchema);