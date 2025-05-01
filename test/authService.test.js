const request = require('supertest');
const app = require('../app');
const userTest = require('../services/authService.js');

describe('testing when user is not in list', () => {
    it('responds with null', async () => {
        await expect(userTest.verifyLogin('bvenegas', 'password18', 301, 'admin')).toBeNull();
    });
});

