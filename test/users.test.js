const request = require('supertest');
const app = require('../app');

describe('testing GET route', () => {
    it('responds with json', function(done) {
        request(app)
          .get('/api/users')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
});