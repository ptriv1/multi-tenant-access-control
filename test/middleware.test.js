const request = require('supertest');
const app = require('../app');
const verifyToken = require('../middleware/authentication.js');
const checkTenant = require('../middleware/tenant.js');
const checkRole = require('../middleware/checkRole.js');
const credentials = [
    {
       "username": "tjohnson",
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRqb2huc29uIiwidGVuYW50SWQiOjY1OCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE0NTk0MDYyfQ.jPIyYKoosKy7AB_J-kRfWyg8O2Q1YB2RQacCja5dlco",
       "tenantId": 658,
       "role": "admin" 
    }
];





describe('testing when user authentication with token fails', () => {
    it('returns unauthorized message', async () => {
        await request(app)
        .get('/api/users')
        .expect(401);  
    });
});

describe('testing when role match succeeds', () => {
    it('returns successful login', async () => {
        await request(app)
            .get('/api/users')
            .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRqb2huc29uIiwidGVuYW50SWQiOjY1OCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE0NTk0MDYyfQ.jPIyYKoosKy7AB_J-kRfWyg8O2Q1YB2RQacCja5dlco')
            .expect(200);
    })
})

describe('testing when tenant check fails', () => {
    it('returns unauthorized message', async () => {
        await request(app)
            .get('/api/users')
            .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRqb2huc29uIiwidGVuYW50SWQiOjY1OCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE0NTk0MDYyfQ.jPIyYKoosKy7AB_J-kRfWyg8O2Q1YB2RQacCja5dlco')
            .expect(401);
    });
});

describe('testing unsuccessful role match', () => {
    it('returns unauthorized message', async () => {
        await request(app)
            .get('/api/users')
            .set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRqb2huc29uIiwidGVuYW50SWQiOjY1OCwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzE0NTk0MDYyfQ.jPIyYKoosKy7AB_J-kRfWyg8O2Q1YB2RQacCja5dlco')
            .expect(401);
    });
});

describe('when role check fails', () => {
    it('returns unauthorized message', async () => {
        await request(app)
            .get('/api/users')
            .set('authorization', '')
            .expect(401);
    });
});

describe('when role check fails', () => {
    it('returns unauthorized message', async () =>
    {
        await request(app)
            .get('/api/users')
            .set('authorization', 'Bearer')
            .expect(401);
    });
});

