const app = require('../app');
const supertest = require('supertest');
const request = supertest(app);


describe('Track events endpoints', () => {

  it('Test PUT - GET by Id - Get by Track - Update - Delete track event', async () => {
    //Test PUT
    const trackEventCreatedResponse = await request.post('/api/trackEvents')
    .send({
      "description": "On approval process",
      "trackId": 100,
      "statusId": 100
      });

      expect(trackEventCreatedResponse.status).toBe(201)
      expect(trackEventCreatedResponse.body.trackEvent).toHaveProperty('id')
      expect(trackEventCreatedResponse.body.trackEvent.description).toBe('On approval process');

 
    //Test GET by ID
    const trackEventGetResponse = await request.get(`/api/trackEvents/id/${trackEventCreatedResponse.body.trackEvent.id}`);

    expect(trackEventGetResponse.status).toBe(200)
    expect(trackEventGetResponse.body.trackEvent.description).toBe('On approval process');

    //Test GET by Track ID
    const trackEventGetByTrackResponse = await request.get(`/api/trackEvents/track/${trackEventGetResponse.body.trackEvent.trackId}`);

    expect(trackEventGetByTrackResponse.status).toBe(200)
    expect(trackEventGetByTrackResponse.body.trackEvents[0].description).toBe('On approval process');
    
    //Test UPDATE
    const trackEventUpdateResponse = await request.put(`/api/trackEvents/${trackEventGetResponse.body.trackEvent.id}`)
    .send({
      "description": "New event",
      "trackId": 1,
      "statusId": 1
    });
  
    expect(trackEventUpdateResponse.status).toBe(200)
    expect(trackEventUpdateResponse.body.message).toBe('TrackEvent updated successfully.');

    //Test DELETE
    const trackEventDeleteResponse = await request.delete(`/api/trackEvents/${trackEventGetResponse.body.trackEvent.id}`);
   
    expect(trackEventDeleteResponse.status).toBe(200)
    expect(trackEventDeleteResponse.body.message).toBe('TrackEvent deleted successfully.');

  });

  
  it('Test GET all track events', async () => {
        const response = await request.get('/api/trackEvents');
        expect(response.status).toBe(200);
      });
      
});
