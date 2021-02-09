const router = require("express").Router();
const Product = require("./../models/product");

const upload = require("../middlewares/upload-photo");
// POST request - create a new product
router.post(
    "/products",
    // upload.single('photo'),
    async(req, res) => {
        try {
            let product = new Product();
            product.title = req.body.title;
            product.description = req.body.description;
            product.photo = req.body.photo;
            product.stockQuantity = req.body.stockQuantity;
            await product.save();

            res.json({
                status: true,
                message: "Successfully saved",
            });
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err.message,
            });
        }
    }
);

// Get request - get all products
router.get("/products", async(req, res) => {
    try {
        let products = await Product.find();

        res.status(200).json({
            success: true,
            products
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

// Get request - get a single product
router.get("/products/:id", async(req, res) => {
    try {
        let product = await Product.findOne({ _id: req.params.id });

        res.status(200).json({
            success: true,
            product
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

// PUT request - Update a single product

// DELETE request - delete a single product

module.exports = router;