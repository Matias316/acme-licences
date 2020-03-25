const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Tracks endpoints', () => {

  it('Test PUT - GET by Id - Update - Delete track', async () => {
    //Test PUT
    const trackCreatedResponse = await request.post('/api/tracks')
    .send({
      "songStartTime": "00:00",
      "songEndTime": "00:10",
      "movieId": 100,
      "songId": 100
      });

      expect(trackCreatedResponse.status).toBe(201)
      expect(trackCreatedResponse.body.track).toHaveProperty('id')
      expect(trackCreatedResponse.body.track.songStartTime).toBe('00:00');

    //Test GET by ID
    const trackGetResponse = await request.get(`/api/tracks/id/${trackCreatedResponse.body.track.id}`);

    expect(trackGetResponse.status).toBe(200)
    expect(trackGetResponse.body.track.songStartTime).toBe('00:00');

    //Test GET by Song
    const trackGetResponseBySong = await request.get(`/api/tracks/songId/${trackCreatedResponse.body.track.songId}`);

    expect(trackGetResponseBySong.status).toBe(200)
    expect(trackGetResponseBySong.body.tracks[0].songStartTime).toBe('00:00');

    //Test UPDATE
    const trackUpdateResponse = await request.put(`/api/tracks/${trackGetResponse.body.track.id}`)
    .send({
      "songStartTime": "00:20",
      "songEndTime": "00:30",
      "movieId": 1,
      "songId": 1
    });
  
    expect(trackUpdateResponse.status).toBe(200)
    expect(trackUpdateResponse.body.message).toBe('Track updated successfully.');

    //Test DELETE
    const trackDeleteResponse = await request.delete(`/api/tracks/${trackGetResponse.body.track.id}`);
   
    expect(trackDeleteResponse.status).toBe(200)
    expect(trackDeleteResponse.body.message).toBe('Track deleted successfully.');

  });

  
  it('Test GET all tracks', async () => {
        const response = await request.get('/api/tracks');
        expect(response.status).toBe(200);
      });
});
