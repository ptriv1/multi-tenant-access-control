const request = require('supertest');
const app = require('../app');

describe('Healthcheck Route', () => {
  it('should return 200 OK', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
  });
});
