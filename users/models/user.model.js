const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            maxLength: 32,
            required: true,
        },
        email: {
            type: String,
            maxLength: 32,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true, // This option should be inside the schema configuration object
    }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
