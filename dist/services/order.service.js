"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderService = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.orderService = {
    createOrder: (data) => prisma.order.create({ data }),
    getAllOrders: () => prisma.order.findMany(),
    getOrderById: (id) => prisma.order.findUnique({ where: { id } }),
};
