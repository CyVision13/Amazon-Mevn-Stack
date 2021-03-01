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
            product.price = req.body.price;
            product.categoryID = req.body.categoryID;
            product.ownerID = req.body.ownerID;
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
        let products = await Product.find()
            .populate("ownerID categoryID")
            .exec();

        res.status(200).json({
            success: true,
            products,
        });
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
        let product = await Product.findOne({ _id: req.params.id })
            .populate("ownerID categoryID")
            .exec();

        res.status(200).json({
            success: true,
            product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

// PUT request - Update a single product
router.put("/products/:id", async(req, res) => {
    try {
        let product = await Product.findOneAndUpdate({ _id: req.params.id }, {
            $set: {
                title: req.body.title,
                price: req.body.price,
                categoryID: req.body.categoryID,
                photo: req.body.photo,
                description: req.body.description,
                ownerID: req.body.ownerID,
                stockQuantity: req.body.stockQuantity,
            },
        }, { upsert: true });

        res.status(200).json({
            success: true,
            updatedProduct: product,
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});

// DELETE request - delete a single product
router.delete("/products/:id", async(req, res) => {
    try {
        let deletedProduct = await Product.findOneAndDelete({ _id: req.params.id });

        if (deletedProduct) {
            res.status(200).json({
                success: true,
                message: "Successfully Deleted",
            });
        }
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    }
});
module.exports = router;