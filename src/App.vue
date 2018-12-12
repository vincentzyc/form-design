<template>
  <div id="app">
    <transition name="move" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>
<style lang="scss" scoped>
@import "./assets/css/main.scss";
</style>

