<template>
  <div class="a-button-group">
    <slot />
  </div>
</template>

<script>
import Button from "./button";
export default {
  name: "a-button-group",
  components: { "a-button": Button },
  mounted() {}
};
</script>

<style lang="scss" scope>
@import "../../assets/css/color.scss";
$radius: 4px;
.a-button-group {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  > .a-button {
    border-radius: 0;
    border-left: none;
    border-right: none;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-bottom-left-radius: $radius;
      border-top-left-radius: $radius;
      border-left: $normal-bg;
    }
    &:last-child {
      border-bottom-right-radius: $radius;
      border-top-right-radius: $radius;
      border-right: $normal-bg;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>