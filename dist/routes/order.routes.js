"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const router = (0, express_1.Router)();
router.post('/', order_controller_1.createOrder);
router.get('/', order_controller_1.getAllOrders);
// @ts-ignore
router.get('/:id', order_controller_1.getOrderById);
router.get('/hello/ping', (req, res) => {
    res.send('Hello World - After Blue Green Deployment - 3');
});
exports.default = router;
