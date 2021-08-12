const db = require("../model");
const Product = db.product;
const Question = db.question;

// Create and Save new Tutorials
exports.createProduct = async (product) => {
    await Product.create({
        id: product.id
    })
};