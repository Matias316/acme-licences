const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Movie scenes endpoints', () => {

  it('Test PUT - GET by Id - Update - Delete movie scenes', async () => {
    //Test PUT
    const movieSceneCreatedResponse = await request.post('/api/movieScenes')
    .send({
      "movieStartTime": "00:00",
      "movieEndTime": "00:10",
      "movieId": 100
      });

      expect(movieSceneCreatedResponse.status).toBe(201)
      expect(movieSceneCreatedResponse.body.movieScene).toHaveProperty('id')
      expect(movieSceneCreatedResponse.body.movieScene.movieStartTime).toBe('00:00');

    //Test GET by ID
    const movieSceneGetResponse = await request.get(`/api/movieScenes/id/${movieSceneCreatedResponse.body.movieScene.id}`);

    expect(movieSceneGetResponse.status).toBe(200)
    expect(movieSceneGetResponse.body.movieScene.movieStartTime).toBe('00:00');

    
    //Test GET by Movie
    const movieSceneGetResponseByMovie = await request.get(`/api/movieScenes/movie/${movieSceneGetResponse.body.movieScene.movieId}`);

    expect(movieSceneGetResponseByMovie.status).toBe(200)
    expect(movieSceneGetResponseByMovie.body.movieScenes[0].movieStartTime).toBe('00:00');

    //Test UPDATE
    const movieSceneUpdateResponse = await request.put(`/api/movieScenes/${movieSceneGetResponse.body.movieScene.id}`)
    .send({
      "movieStartTime": "00:20",
      "movieEndTime": "00:30",
      "movieId": 100
    });
  
    expect(movieSceneUpdateResponse.status).toBe(200)
    expect(movieSceneUpdateResponse.body.message).toBe('MovieScene updated successfully.');

    //Test DELETE
    const movieSceneDeleteResponse = await request.delete(`/api/movieScenes/${movieSceneGetResponse.body.movieScene.id}`);
   
    expect(movieSceneDeleteResponse.status).toBe(200)
    expect(movieSceneDeleteResponse.body.message).toBe('MovieScene deleted successfully.');

  });

  
  it('Test GET all movieScenes', async () => {
        const response = await request.get('/api/movieScenes');
        expect(response.status).toBe(200);
      });
      
});
