import { formatCalendarDate } from "../../utils/utils";
export const adaptWeatherData = (data) => {
  const { current, daily } = data;

  return {
    current: {
      temp: Math.trunc(current.temp),
      feelsLike: Math.trunc(current.feels_like),
      pressure: current.pressure,
      humidity: current.humidity,
      windSpeed: current.wind_speed,
      windGust: current.wind_gust,
      windDeg: current.wind_deg,
      weatherIcon: current.weather[0].icon,
      weatherDescription: `${current.weather[0].main} - ${current.weather[0].description}`,
    },
    daily: daily.map((day, index) => {
      return {
        temp: Math.trunc((day.temp.day + day.temp.night) / 2),
        feelsLike: Math.trunc((day.feels_like.day + day.feels_like.night) / 2),
        pressure: day.pressure,
        humidity: day.humidity,
        windSpeed: day.wind_speed,
        windGust: day.wind_gust,
        windDeg: day.wind_deg,
        weatherIcon: day.weather[0].icon,
        weatherDescription: `${day.weather[0].main} - ${day.weather[0].description}`,
        chartDate: formatCalendarDate(index),
      };
    }),
  };
};
