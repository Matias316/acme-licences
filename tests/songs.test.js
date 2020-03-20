const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);

describe('Songs endpoints', () => {
  
  it('Test PUT song', async () => {
    const response = await request.post('/api/songs')
    .send({
      "title": "Back in Black",
      "duration": 100,
      "owner": "Sony Music"
      });

      expect(response.status).toBe(201)
      expect(response.body.song).toHaveProperty('id')
      expect(response.body.song.title).toBe('Back in Black');
    
  });

  it('Test GET all songs', async () => {
        const response = await request.get('/api/songs');

        expect(response.status).toBe(200);
      });
});
