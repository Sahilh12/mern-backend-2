const mongoose = require('mongoose')

const timelineSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title Required!"],
    },
    description: {
        type: String,
        required: [true, "Description Required!"],
    },
    timeline: {
        from: {
            type: String,
            required: [true, "Timeline start date is required"]
        },
        to: {
            type: String,
        },
    },
})


module.exports = mongoose.model("Timeline", timelineSchema)