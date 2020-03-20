const app = require('../../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Movies endpoints', () => {

  it('Test GET all movies', async () => {
        const response = await request.get('/api/movies');
        expect(response.status).toBe(200);
      });
});
