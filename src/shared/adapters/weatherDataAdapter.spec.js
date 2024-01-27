import { adaptWeatherData } from "./weatherDataAdapter";
import { formatCalendarDate } from "../../utils/utils";

describe("adaptWeatherData", () => {
  it("should adapt weather data correctly", () => {
    const data = {
      current: {
        temp: 25.1,
        feels_like: 25.3,
        pressure: 1000,
        humidity: 80,
        wind_speed: 10,
        wind_gust: 10,
        wind_deg: 10,
        weather: [
          {
            id: 800,
            main: "Clear",
            description: "clear sky",
            icon: "01d",
          },
        ],
      },
      daily: [
        {
          temp: {
            day: 12.7,
            night: 8.1,
          },
          feels_like: {
            day: 10.2,
            night: 6,
          },
          pressure: 1000,
          humidity: 80,
          wind_speed: 10,
          wind_gust: 10,
          wind_deg: 10,
          weather: [
            {
              id: 800,
              main: "Clear",
              description: "clear sky",
              icon: "01d",
            },
          ],
        },
      ],
    };

    const adaptedData = adaptWeatherData(data);

    expect(adaptedData).toEqual({
      current: {
        temp: 25,
        feelsLike: 25,
        pressure: 1000,
        humidity: 80,
        windSpeed: 10,
        windGust: 10,
        windDeg: 10,
        weatherIcon: "01d",
        weatherDescription: "Clear - clear sky",
      },
      daily: [
        {
          temp: 10,
          feelsLike: 8,
          pressure: 1000,
          humidity: 80,
          windSpeed: 10,
          windGust: 10,
          windDeg: 10,
          weatherIcon: "01d",
          weatherDescription: "Clear - clear sky",
          chartDate: formatCalendarDate(0),
        },
      ],
    });
  });
});
