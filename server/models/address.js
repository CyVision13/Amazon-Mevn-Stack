const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AddressSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "user" },
    country: String,
    fullName: String,
    streedAddress: String,
    city: String,
    state: String,
    zipCode: Number,
    phoneNumber: String,
    deliverInstructions: String,
    securityCode: String,
});
module.exports = mongoose.model("Address", AddressSchema);