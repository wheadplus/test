<template>
  <div style="margin-top:20px;">
    <a-button>default</a-button>
    <a-button primary>primary</a-button>
    <a-button error>error</a-button>
    <a-button icon="settings">default</a-button>
    <a-button icon="settings" position="right">default</a-button>
    <a-button :loading="true" >loading</a-button>
  </div>
</template>
<script>
import Button from "../../../src/components/button/button";

export default {
  components: {
    "a-button": Button
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
</style>