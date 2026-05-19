const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({

    name: {

        type: String,

        required: true
    },

    email: {

        type: String,

        required: true,

        match: [
            /^\S+@\S+\.\S+$/,
            "Invalid Email"
        ]
    },

    title: {

        type: String,

        required: true
    },

    description: {

        type: String,

        required: true
    },

    category: String,

    location: String,

    status: {

        type: String,

        default: "Pending"
    },

    createdAt: {

        type: Date,

        default: Date.now
    }

});

module.exports = mongoose.model(
    "Complaint",
    ComplaintSchema
);