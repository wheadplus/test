<template>
  <button class="a-button" :class="{[`position-${position}`]:true, primary,error}" @click="onClick">
    <a-icon v-if="!loading && icon" :name="icon" class="a-icon"></a-icon>
    <a-icon v-if="loading" name="loading" class="a-icon loading"></a-icon>
    <span class="slot-content">
      <slot></slot>
    </span>
    <span ref="cover" class="a-cover" :class="{active}"></span>
  </button>
</template>

<script>
import aIcon from "../icon/icon";
export default {
  name: "a-button",
  components: { aIcon },
  props: {
    icon: String,
    loading: { type: Boolean },
    position: {
      type: String,
      default: "left",
      validator(value) {
        return value === "right" || value === "left";
      }
    },
    primary: { type: Boolean, default: false },
    error: { type: Boolean, default: false }
  },
  data() {
    return {
      active: false
    };
  },
  mounted() {
    this.$el.addEventListener("animationend", this.listenAnimation);
  },
  destroyed() {
    // this.$el && this.$el.removeEventListener("animationend", this.listenAnimation);
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
      this.$refs.cover.style.left = event.offsetX + "px";
      this.$refs.cover.style.top = event.offsetY + "px";
      this.active = true;
    },
    listenAnimation() {
      this.active = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/css/color.scss";

.a-button {
  vertical-align: middle;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5;
  height: 32px;
  padding: 0 12px;
  color: $normal-color;
  border-radius: 4px;
  background: $normal-bg;
  border: 1px solid $normal-bg;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  &:focus {
    background-color: $hover;

    outline: none;
  }
  &:hover {
    background-color: $hover;
  }

  > .a-icon {
    order: 1;
    margin-right: 0.2em;
    &.loading {
      animation: loading-spin 1.3s linear infinite;
    }
  }
  > .slot-content {
    order: 2;
  }
  &.position-right {
    > .a-icon {
      order: 2;
      margin-left: 0.2em;
      margin-right: 0;
    }
    > .slot-content {
      order: 1;
    }
  }
  > .a-cover {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba($color: #fff, $alpha: 0.8);
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba($color: #fff, $alpha: 0.8);
    visibility: hidden;
    pointer-events: none;

    opacity: 0.6;
    &.active {
      animation: scacle 0.5s linear forwards;
    }
  }

  &.primary {
    background: $primary-bg;
    color: #fff;
    &:hover {
      background: $primary-bg-hover;
    }
  }

  &.error {
    background: $error-bg;
    color: #fff;
    &:hover {
      background: $error-bg-hover;
    }
  }
}

@keyframes scacle {
  to {
    transform: scale(10);
    visibility: visible;
  }
}
@keyframes loading-spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>