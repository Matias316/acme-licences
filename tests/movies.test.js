const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Movies endpoints', () => {

  it('Test PUT - GET by Id - Update - Delete movie', async () => {
    //Test PUT
    const movieCreatedResponse = await request.post('/api/movies')
    .send({
      "title": "Forrest Gump",
      "genre": "Comedy"
      });

      expect(movieCreatedResponse.status).toBe(201)
      expect(movieCreatedResponse.body.movie).toHaveProperty('id')
      expect(movieCreatedResponse.body.movie.genre).toBe('Comedy');

    //Test GET
    const movieGetResponse = await request.get(`/api/movies/${movieCreatedResponse.body.movie.id}`);

    expect(movieGetResponse.status).toBe(200)
    expect(movieGetResponse.body.movie.title).toBe('Forrest Gump');

    //Test UPDATE
    const movieUpdateResponse = await request.put(`/api/movies/${movieGetResponse.body.movie.id}`)
    .send({
      "title": "New title",
      "genre": "New genre"
    });
  
    expect(movieUpdateResponse.status).toBe(200)
    expect(movieUpdateResponse.body.message).toBe('Movie updated successfully.');

    //Test DELETE
    const movieDeleteResponse = await request.delete(`/api/movies/${movieGetResponse.body.movie.id}`);
   
    expect(movieDeleteResponse.status).toBe(200)
    expect(movieDeleteResponse.body.message).toBe('Movie deleted successfully.');

  });

  
  it('Test GET all movies', async () => {
        const response = await request.get('/api/movies');
        expect(response.status).toBe(200);
      });
});
