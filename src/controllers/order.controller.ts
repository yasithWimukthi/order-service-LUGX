import { Request, Response } from 'express';
import { orderService } from '../services/order.service';

export const createOrder = async (req: Request, res: Response) => {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
};

export const getAllOrders = async (_: Request, res: Response) => {
    const orders = await orderService.getAllOrders();
    res.json(orders);
};

export const getOrderById = async (req: Request, res: Response) => {
    const order = await orderService.getOrderById(Number(req.params.id));
    if (!order) return res.status(404).json({ message: 'Not found' });
    res.json(order);
};
