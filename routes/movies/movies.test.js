const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Movies endpoints', () => {

  test('Test GET all movies', () => {
      request.get('/api/movies').then(movies => {
        expect(movies).toHaveLength(1);
      });
         
    });
});
