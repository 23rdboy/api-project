const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    },
    finished: {
        type: Boolean,
        default: false
    },
});

module.exports = mongoose.model("Book", bookSchema);