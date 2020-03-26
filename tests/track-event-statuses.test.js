const app = require("../app");
const supertest = require("supertest");
const request = supertest(app);

describe("Track event status endpoints", () => {
  it("Test PUT - GET by Id - Get by id - Update - Delete track event status", async () => {
    //Test PUT
    const trackEventStatusCreatedResponse = await request
      .post("/api/trackEventStatuses")
      .send({
        type: "INIT"
      });

    expect(trackEventStatusCreatedResponse.status).toBe(201);
    expect(
      trackEventStatusCreatedResponse.body.trackEventStatus
    ).toHaveProperty("id");
    expect(trackEventStatusCreatedResponse.body.trackEventStatus.type).toBe(
      "INIT"
    );

    //Test GET by ID
    const trackEventStatusGetResponse = await request.get(
      `/api/trackEventStatuses/${trackEventStatusCreatedResponse.body.trackEventStatus.id}`
    );

    expect(trackEventStatusGetResponse.status).toBe(200);
    expect(trackEventStatusGetResponse.body.trackEventStatus.type).toBe("INIT");

    //Test UPDATE
    const trackEventStatusUpdateResponse = await request
      .put(
        `/api/trackEventStatuses/${trackEventStatusGetResponse.body.trackEventStatus.id}`
      )
      .send({
        type: "UNDER-DISCUSSION"
      });

    expect(trackEventStatusUpdateResponse.status).toBe(200);
    expect(trackEventStatusUpdateResponse.body.message).toBe(
      "TrackEventStatus updated successfully."
    );

    //Test DELETE
    const trackEventStatusDeleteResponse = await request.delete(
      `/api/trackEventStatuses/${trackEventStatusGetResponse.body.trackEventStatus.id}`
    );

    expect(trackEventStatusDeleteResponse.status).toBe(200);
    expect(trackEventStatusDeleteResponse.body.message).toBe(
      "TrackEventStatus deleted successfully."
    );
  });

  it("Test GET all track events statuses", async () => {
    const response = await request.get("/api/trackEventStatuses");
    expect(response.status).toBe(200);
  });
  
});
