import { defineStore } from "pinia";
import { fetchWeatherData } from "../shared/api/api-service";
import { adaptWeatherData } from "../shared/adapters/weatherDataAdapter";

const STATUS = {
  SUCCESS: 200,
  ERROR: 401,
};

export const useWeatherDataStore = defineStore("weather-report-store", {
  state: () => ({
    isLoading: false,
    current: {
      temp: 0,
      feelsLike: 0,
      pressure: 0,
      humidity: 0,
      windSpeed: 0,
      windGust: 0,
      windDeg: 0,
      weatherIcon: "",
      weather: {
        id: 0,
        main: "",
        description: "",
        icon: "",
      },
    },
    daily: [
      {
        temp: 0,
        feelsLike: 0,
        pressure: 0,
        humidity: 0,
        windSpeed: 0,
        windGust: 0,
        windDeg: 0,
        weatherIcon: "",
        weather: {
          id: 0,
          main: "",
          description: "",
          icon: "",
        },
        chartDate: "",
      },
    ],
  }),
  getters: {
    getCurrent() {
      return this.current;
    },
    getIcon() {
      return this.current.weatherIcon;
    },
    getDaily() {
      return this.daily;
    },
  },
  actions: {
    async fetchDetails() {
      this.isLoading = true;
      const { status, data } = await fetchWeatherData();
      const adaptedData = adaptWeatherData(data);
      if (status === STATUS.SUCCESS) {
        this.current = adaptedData.current;
        this.daily = adaptedData.daily;
        this.isLoading = false;
      }
    },
  },
});
