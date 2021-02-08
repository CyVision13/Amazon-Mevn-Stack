const router = require("express").Router();
const Category = require("./../models/category");

// Post request

router.post("/categories", async(req, res) => {
    try {
        const category = new Category();
        category.type = req.body.type;

        await category.save();

        res.json({
            success: true,
            message: "SuccessFully created a new category",
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

// Get request

router.get("/categories", async(req, res) => {
    try {
        let categories = await Category.find();
        res.json({
            categories,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

module.exports = router;