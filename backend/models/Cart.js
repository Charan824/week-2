const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    items: [
        {
            productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // Reference to Product
            quantity: { type: Number, default: 1 },
        },
    ],
});

module.exports = mongoose.model("Cart", cartSchema);
