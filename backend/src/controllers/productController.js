const Category = require('../models/categoriesModels');
const Product = require('../models/productsModels');



// POST: Thêm mới danh mục
const postCategories = async (req, res) => {
    try {

        const { cate_name } = req.body;

        // Kiểm tra nếu tên danh mục trống
        if (!cate_name) {
            return res.status(400).json({ message: "Category name is required." });
        }

        const newCategory = new Category({ cate_name });

        await newCategory.save();

        res.status(201).json({
            message: "Category created successfully.",
            category: newCategory
        });
    } catch (error) {

        res.status(500).json({ message: "Error creating category", error: error.message });
    }
};


// GET: Lấy tất cả các danh mục
const getAllCategories = async (req, res) => {
    try {

        const categories = await Category.find();
        res.status(200).json(categories);

    } catch (error) {

        res.status(500).json({ message: "Error fetching categories", error: error.message });
    }
};

// POST: Thêm mới sản phẩm
const postProduct = async (req, res) => {
    try {
        const {
            cate_id,
            prod_name,
            prod_price,
            date_start_sale,
            date_end_sale,
            prod_discount,
            prod_stock,
            prod_sold,
            prod_avg_rating,
            prod_review_count,
            prod_image,
            prod_description,
            prod_characteristics,
            prod_variations // Mảng các biến thể của sản phẩm
        } = req.body;

        // Tạo một đối tượng Product mới với các thông tin trên
        const newProduct = new Product({
            cate_id,
            prod_name,
            prod_price,
            date_start_sale,
            date_end_sale,
            prod_discount,
            prod_stock,
            prod_sold,
            prod_avg_rating,
            prod_review_count,
            prod_image,
            prod_description,
            prod_characteristics,
            prod_variations 
        });

        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Product created successfully",
            product: savedProduct
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to create product",
            error: error.message
        });
    }
};


// GET: Lấy tất cả sản phẩm
const getAllProduct = async (req, res) => {
    try {
        // Tìm tất cả sản phẩm và lấy thông tin category
        const products = await Product.find().populate('cate_id');

        // Trả về danh sách sản phẩm
        res.status(200).json({
            message: "Products retrieved successfully",
            products
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to retrieve products",
            error: error.message
        });
    }
};

// PUT: Chỉnh sửa sản phẩm theo ID
const updateProduct = async (req, res) => {
    try {
        const { product_id } = req.params; // Lấy productId từ URL
        const {
            cate_id,
            prod_name,
            prod_price,
            date_start_sale,
            date_end_sale,
            prod_discount,
            prod_stock,
            prod_sold,
            prod_avg_rating,
            prod_review_count,
            prod_image,
            prod_description,
            prod_characteristics,
            prod_variations // Mảng các biến thể của sản phẩm
        } = req.body;

        // Tìm sản phẩm theo ID và cập nhật các trường dữ liệu
        const updatedProduct = await Product.findByIdAndUpdate(
            product_id, 
            {
                cate_id,
                prod_name,
                prod_price,
                date_start_sale,
                date_end_sale,
                prod_discount,
                prod_stock,
                prod_sold,
                prod_avg_rating,
                prod_review_count,
                prod_image,
                prod_description,
                prod_characteristics,
                prod_variations
            },
            { new: true } // Trả về bản ghi mới sau khi cập nhật
        );

        // Kiểm tra nếu không tìm thấy sản phẩm
        if (!updatedProduct) {
            return res.status(404).json({
                message: "Product not found"
            });
        }

        // Trả về sản phẩm đã được chỉnh sửa
        res.status(200).json({
            message: "Product updated successfully",
            product: updatedProduct
        });

    } catch (error) {
        res.status(500).json({
            message: "Failed to update product",
            error: error.message
        });
    }
};


module.exports = {
    postCategories,
    getAllCategories,
    postProduct,
    getAllProduct,
    updateProduct,
};
