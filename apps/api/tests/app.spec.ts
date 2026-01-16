import { describe, expect, it } from "vitest";
import { app } from "../src/app";

describe("App", () => {
  it("should return an status object on /health", async () => {
    const response = await app.request("/health");
    const responseBody = await response.json();
    expect(response.status).toBe(200);
    expect(responseBody).toEqual({ status: "running" });
  });
});
