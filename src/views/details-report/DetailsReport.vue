<template>
  <div :class="$style.detailsReport">
    <DetailsCard
      v-for="card in cardList"
      :key="card.label"
      :value="card.value"
      :label="card.label"
      :symbol="card.symbol"
      :hasUppercaseSymbol="card.hasUppercaseSymbol"
    />
  </div>
</template>

<script>
import DetailsCard from "../../components/shared/DetailsCard.vue";

export default {
  name: "DetailsReport",

  components: {
    DetailsCard,
  },
  props: {
    feelsLike: {
      type: [String, Number],
      required: true,
      default: "N/A",
    },
    wind: {
      type: [String, Number],
      required: true,
      default: "N/A",
    },
    windGust: {
      type: [String, Number],
      required: true,
      default: "N/A",
    },
    windDeg: {
      type: [String, Number],
      required: true,
      default: "N/A",
    },
    humidity: {
      type: [String, Number],
      required: true,
      default: "N/A",
    },
    pressure: {
      type: [String, Number],
      required: true,
      default: "N/A",
    },
  },

  computed: {
    cardList() {
      return [
        {
          value: this.feelsLike,
          label: "Feels like",
          symbol: "°C",
          hasUppercaseSymbol: true,
        },
        {
          value: this.wind,
          label: "Wind",
          symbol: "m/s",
        },
        {
          value: this.windGust,
          label: "Wind gust",
          symbol: "m/s",
        },
        {
          value: this.windDeg,
          label: "Wind deg",
          symbol: "°",
          hasUppercaseSymbol: true,
        },
        {
          value: this.humidity,
          label: "Humidity",
          symbol: "%",
        },
        {
          value: this.pressure,
          label: "Pressure",
          symbol: "hPa",
        },
      ];
    },
  },
};
</script>

<style module lang="scss">
@import "./details-report.scss";
</style>
