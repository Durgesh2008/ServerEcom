"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const verifyJwt_1 = require("../Middlewares/verifyJwt");
const productController_1 = require("../controllers/productController");
const uploadMiddleware_1 = require("../Middlewares/uploadMiddleware");
const router = (0, express_1.Router)();
router.post("/add", verifyJwt_1.verifyJwt, productController_1.createProductController);
router.put("/update/:id", verifyJwt_1.verifyJwt, productController_1.updateProductController);
router.delete("/delete/:id", verifyJwt_1.verifyJwt, productController_1.deleteProductController);
router.post("/upload-excel", verifyJwt_1.verifyJwt, uploadMiddleware_1.uploadMiddleware, productController_1.AddProductByExcel);
router.get("/getbyid/:id", productController_1.getProductByIdController);
router.get("/get", productController_1.getAllProductsController);
router.get("/getbyname/:name", productController_1.getProductByNameController);
router.get("/filter", productController_1.filterProductsController);
exports.default = router;
