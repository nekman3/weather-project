export const ROUTE_NAMES = Object.freeze({
  WEATHER_REPORT: "WEATHER_REPORT",
});

export default [
  {
    path: "/",
    name: ROUTE_NAMES.WEATHER_REPORT,
    component: () => import("../views/weather-report/WeatherReport.vue"),
  },
];
