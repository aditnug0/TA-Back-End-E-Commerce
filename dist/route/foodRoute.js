"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verify_1 = require("../middleware/verify");
const uploadFile_1 = __importDefault(require("../middleware/uploadFile"));
const foodController_1 = require("../controller/foodController");
const verifyaddFood_1 = require("../middleware/verifyaddFood");
const app = (0, express_1.default)();
// allow to read json from the body
app.use(express_1.default.json());
// adress for get admin data
app.get(`/food`, foodController_1.readFood);
// adress for add new admin
app.post(`/food`, [uploadFile_1.default.single("image"), verify_1.verifyAdmin, verifyaddFood_1.verifyAddFood], foodController_1.createFood);
app.put(`/food/:item_id`, [uploadFile_1.default.single("image"), verify_1.verifyAdmin, verifyaddFood_1.verifyAddFood], foodController_1.updateFood);
app.delete(`/food/:item_id`, verify_1.verifyAdmin, foodController_1.deleteFood);
// import express from "express"
// import { verifyToken } from "../middlewares/authorization"
// import { createEgg, dropEgg, getAllEggs, updateEgg } from "../controllers/eggController"
// import uploadFile from "../middlewares/uploadFile"
// import { verifyAddEgg, verifyEditEgg } from "../middlewares/verifyEgg"
// const app = express()
// app.use(express.json())
// /** add middleware process to verify token */
// app.get(`/`, [verifyToken], getAllEggs)
// /** add middleware process to varify token, upload an image, and verify request data */
// app.post(`/`, [verifyToken, uploadFile.single("image"), verifyAddEgg], createEgg)
// /** add middleware process to varify token, upload an image, and verify request data */
// app.put(`/:id`, [verifyToken, uploadFile.single("image"), verifyEditEgg], updateEgg)
// /** add middleware process to verify token */
// app.delete(`/:id`, [verifyToken], dropEgg)
exports.default = app;
