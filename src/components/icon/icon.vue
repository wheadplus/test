<template>
    <svg class="icon">
      <use :xlink:href="`#i-${name}`"></use>
    </svg>   
</template>

<script>
import "./iconfont";
export default {
  name: "a-icon",
  props: ["name"]
};
</script>

<style lang="scss" scope>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>