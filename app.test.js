import { describe, it, expect, beforeAll } from "vitest";
import request from "supertest";
import { app } from "./app.js";

beforeAll(async () => {
  request(app);
});

describe("app", () => {
  it("post /", async () => {
    const response = await request(app).post("/").send({
      firstName: "John",
      lastName: "Doe",
      orderNumber: "123456",
      email: "test@autopilot.com",
    });

    expect(response.status).toBe(200);
  });
});
