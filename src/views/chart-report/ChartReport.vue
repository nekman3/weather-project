<template>
  <div :class="$style.chartReport">
    <div :class="$style.chartReport__label">Weekly Variation</div>
    <canvas id="weather-chart" width="300" height="200"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";
import { mapState } from "pinia";
import { useWeatherDataStore } from "../../stores/weather-data";

export default {
  name: "ChartReport",
  mounted() {
    new Chart(document.getElementById("weather-chart"), {
      type: "line",
      data: {
        labels: this.chartDates,
        datasets: [
          {
            label: "Temperature",
            data: this.chartTemps,
          },
        ],
      },
    });
  },

  computed: {
    ...mapState(useWeatherDataStore, { daily: "getDaily" }),
    chartDates() {
      return this.daily.map((day) => day.chartDate);
    },
    chartTemps() {
      return this.daily.map((day) => day.temp);
    },
  },
};
</script>

<style module lang="scss">
@import "./chart-report.scss";
</style>
