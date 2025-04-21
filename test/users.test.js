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

describe('POST /api/users', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/api/users')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
  });







  