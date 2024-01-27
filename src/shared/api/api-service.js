import axios from "axios";

const apiService = axios.create({
  baseURL:
    "https://api.openweathermap.org/data/2.5/onecall?lat=40.58725980318928&lon=22.948223362612612&exclude=hourly,minutely&appid=11b0499bd13ab56063de7565a440eb97&units=metric",
});

export const fetchWeatherData = async (url) => {
  try {
    return await apiService.get(url);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
