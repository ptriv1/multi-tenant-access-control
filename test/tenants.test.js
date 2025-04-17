const request = require('supertest');
const app = require('../app');

describe('testing GET route', () => {
    it('responds with json', function(done) {
        request(app)
          .get('/api/tenants')
          .set('Accept', 'application/json')
          .expect('Content-Type', /json/)
          .expect(200, done);
      });
});

describe('POST /api/tenants', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/api/tenants')
        .send({name: 'AB Enterprises'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });