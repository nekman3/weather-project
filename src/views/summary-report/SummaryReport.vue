<template>
  <div :class="$style.summaryReport">
    <div :class="$style.summaryReport__btns">
      <button :class="$style.summaryReport__btn" @click="getNowReport">
        Now
      </button>
      <button :class="$style.summaryReport__btn" @click="getTodayDayReport">
        Today
      </button>
      <button
        :class="[$style.summaryReport__btn, previousBtnDisabledClass]"
        @click="getPreviousDayReport"
      >
        {{ previousDayText }}
      </button>
      <button
        :class="[$style.summaryReport__btn, nextBtnDisabledClass]"
        @click="getNextDayReport"
      >
        {{ nextDayText }}
      </button>
    </div>
    <div :class="$style.summaryReport__info">
      <div :class="$style['summaryReport__info-temp']">
        <div :class="$style['summaryReport__info-temp__val']">
          {{ temp }} °C
        </div>
        <div :class="$style['summaryReport__info-temp__desc']">
          {{ description }}
        </div>
      </div>
      <div :class="$style.summaryReport__img"><img :src="iconImg" /></div>
    </div>
  </div>
</template>

<script>
import { mapState } from "pinia";
import { useWeatherDataStore } from "../../stores/weather-data";
import { mapIconFromUrl, isMobile } from "../../utils/utils";

export default {
  name: "SummaryReport",
  props: {
    temp: {
      type: Number,
      required: true,
      default: 0,
    },
    icon: {
      type: String,
      required: true,
      default: "",
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
  },
  emits: ["onSelectDay", "onSelectCurrentDay"],

  data() {
    return {
      dayCounter: 0,
    };
  },

  computed: {
    iconImg() {
      return mapIconFromUrl(this.icon);
    },
    ...mapState(useWeatherDataStore, { daily: "getDaily" }),
    previousBtnDisabledClass() {
      return this.dayCounter === 0
        ? this.$style["summaryReport__btn--disbaled"]
        : null;
    },
    nextBtnDisabledClass() {
      return this.dayCounter === this.daily.length - 1
        ? this.$style["summaryReport__btn--disbaled"]
        : null;
    },
    nextDayText() {
      return isMobile() ? " > " : "Next day";
    },
    previousDayText() {
      return isMobile() ? " < " : "Previous day";
    },
  },
  methods: {
    getNextDayReport() {
      this.dayCounter = this.dayCounter + 1;
      this.$emit("onSelectDay", this.dayCounter);
    },
    getPreviousDayReport() {
      this.dayCounter = this.dayCounter - 1;
      this.$emit("onSelectDay", this.dayCounter);
    },
    getTodayDayReport() {
      this.dayCounter = 0;
      this.$emit("onSelectDay", this.dayCounter);
    },
    getNowReport() {
      this.dayCounter = 0;
      this.$emit("onSelectCurrentDay");
    },
  },
};
</script>

<style module lang="scss">
@import "./summary-report.scss";
</style>
