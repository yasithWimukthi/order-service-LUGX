"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrderById = exports.getAllOrders = exports.createOrder = void 0;
const order_service_1 = require("../services/order.service");
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_service_1.orderService.createOrder(req.body);
    res.status(201).json(order);
});
exports.createOrder = createOrder;
const getAllOrders = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_service_1.orderService.getAllOrders();
    res.json(orders);
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_service_1.orderService.getOrderById(Number(req.params.id));
    if (!order)
        return res.status(404).json({ message: 'Not found' });
    res.json(order);
});
exports.getOrderById = getOrderById;
