<template>
  <div v-if="!isLoading" :class="$style.weatherReport">
    <SummaryReport
      :temp="displayedWeather.temp"
      :icon="displayedWeather.weatherIcon"
      :description="displayedWeather.weatherDescription"
      @onSelectDay="selectDay"
      @onSelectCurrentDay="selectCurrentDay"
      :isLoading="isLoading"
    />
    <DetailsReport
      :feelsLike="displayedWeather.feelsLike"
      :wind="displayedWeather.windSpeed"
      :windGust="displayedWeather.windGust"
      :windDeg="displayedWeather.windDeg"
      :humidity="displayedWeather.humidity"
      :pressure="displayedWeather.pressure"
    />
    <ChartReport />
  </div>
  <div v-else><img src="../../assets/spinner.gif" /></div>
</template>

<script>
import SummaryReport from "../summary-report/SummaryReport.vue";
import DetailsReport from "../details-report/DetailsReport.vue";
import ChartReport from "../chart-report/ChartReport.vue";
import { mapState, mapActions } from "pinia";
import { useWeatherDataStore } from "../../stores/weather-data";

export default {
  name: "WeatherReport",
  components: {
    SummaryReport,
    DetailsReport,
    ChartReport,
  },
  data() {
    return {
      displayedWeather: {},
    };
  },
  async created() {
    await this.fetchDetails();
    this.displayedWeather = this.current;
  },
  computed: {
    ...mapState(useWeatherDataStore, {
      current: "getCurrent",
      daily: "getDaily",
      isLoading: "isLoading",
    }),
    weatherDescription() {
      return this.displayedWeather.weatherDescription;
    },
  },
  methods: {
    ...mapActions(useWeatherDataStore, ["fetchDetails"]),
    selectDay(day) {
      this.displayedWeather = this.daily[day];
    },
    selectCurrentDay() {
      this.displayedWeather = this.current;
    },
  },
};
</script>

<style module lang="scss">
@import "./weather-report.scss";
</style>
