const request = require('supertest');
const app = require('../dist/index'); // Adjust according to your app entry point

describe('Order Service Integration Tests', () => {
    it('should fetch orders', async () => {
        const response = await request(app).get('/api/orders');
        expect(response.statusCode).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    it('should return 404 for unknown route', async () => {
        const response = await request(app).get('/api/unknown');
        expect(response.statusCode).toBe(404);
    });
});
