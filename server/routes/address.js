const router = require("express").Router();
const Address = require("./../models/address");
const veriftyToken = require("../middlewares/verify-token");

router.post("/addresses", verifyToken, async(req, res) => {
    try {

        let address = new Address();
        address.user = req.decoded._id;
        address.country = req.body.country;
        address.fullName = req.body.fullName;
        address.streetAddress = req.body.streetAddress;
        address.city = req.body.city;
        address.zipCode = req.body.zipCode;
        address.phoneNumber = req.body.phoneNumber;
        address.deliverInstructions = req.body.deliverInstructions;
        address.securityCode = req.body.securityCode;

        await address.save();
        res.json({
            success: true,
            message: "Successfully added an address",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

router.get('/addresses', veriftyToken, async(req, res) => {
    try {
        let addresses = await Address.find({ user: req.decoded._id })
        res.json({
            success: true,
            addresses: addresses
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
})

module.exports = router;