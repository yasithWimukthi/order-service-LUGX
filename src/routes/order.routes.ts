import { Router } from 'express';
import { createOrder, getAllOrders, getOrderById } from '../controllers/order.controller';

const router = Router();

router.post('/', createOrder);
router.get('/', getAllOrders);
// @ts-ignore
router.get('/:id', getOrderById);

router.get('/hello/ping', (req, res) => {
    res.send('Hello World');
});

export default router;
