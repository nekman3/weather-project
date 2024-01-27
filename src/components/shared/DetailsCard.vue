<template>
  <div :class="$style.detailsCard">
    <div>
      <span :class="$style.detailsCard__val">{{ value }}</span>
      <span
        :class="[
          $style.detailsCard__symbol,
          { [$style['detailsCard__symbol--uppercase']]: hasUppercaseSymbol },
        ]"
        >{{ symbol }}</span
      >
    </div>
    <div :class="$style.detailsCard__label">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: "DetailsCard",
  props: {
    value: {
      type: [String, Number],
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    symbol: {
      type: String,
      required: false,
      default: "",
    },
    hasUppercaseSymbol: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style module lang="scss">
@import "./details-card.scss";
</style>
