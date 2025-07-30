import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const orderService = {
    createOrder: (data: any) => prisma.order.create({ data }),
    getAllOrders: () => prisma.order.findMany(),
    getOrderById: (id: number) =>
        prisma.order.findUnique({ where: { id } }),
};
