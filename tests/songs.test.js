const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Songs endpoints', () => {
  
  it('Test PUT - GET by Id - Update - Delete song', async () => {
    //Test PUT
    const songCreatedResponse = await request.post('/api/songs')
    .send({
      "title": "Back in Black",
      "duration": 100,
      "owner": "Sony Music"
      });

      expect(songCreatedResponse.status).toBe(201)
      expect(songCreatedResponse.body.song).toHaveProperty('id')
      expect(songCreatedResponse.body.song.title).toBe('Back in Black');
    
      //Test GET
      const songGetResponse = await request.get(`/api/songs/${songCreatedResponse.body.song.id}`);

      expect(songGetResponse.status).toBe(200)
      expect(songGetResponse.body.song.title).toBe('Back in Black');

      //Test UPDATE
      const songUpdateResponse = await request.put(`/api/songs/${songGetResponse.body.song.id}`)
      .send({
        "title": "New title",
        "duration": 200,
        "owner": "New owner"
        });
  
      expect(songUpdateResponse.status).toBe(200)
      expect(songUpdateResponse.body.message).toBe('Song updated successfully.');

       //Test DELETE
       const songDeleteResponse = await request.delete(`/api/songs/${songGetResponse.body.song.id}`);
   
       expect(songDeleteResponse.status).toBe(200)
       expect(songDeleteResponse.body.message).toBe('Song deleted successfully.');

  });

  it('Test GET all songs', async () => {
        const response = await request.get('/api/songs');

        expect(response.status).toBe(200);
      });
      
});
