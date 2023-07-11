const axios = require("axios");
const { expect } = require("chai");

const API_KEY = "f2e4638014f36eeb2dd12754b4ac275b";
const API_URL = "https://api.openweathermap.org/data/2.5/weather";

describe("Open Weather API Tests", () => {
  it("should get weather by city", async () => {
    const city = "lon";
    const queryParams = {
      q: city,
      appid: API_KEY,
    };

    const response = await axios.get(API_URL, { params: queryParams });

    expect(response.status).to.equal(200);
    expect(response.data.name).to.equal(city);
    expect(response.data.weather).to.be.an("array");
  });

  it("should get weather by coordinates", async () => {
    const lat = 51.5074;
    const lon = -0.1278;
    const queryParams = {
      lat: lat,
      lon: lon,
      appid: API_KEY,
    };

    const response = await axios.get(API_URL, { params: queryParams });

    expect(response.status).to.equal(200);
    expect(response.data.weather).to.be.an("array");
  });
});
