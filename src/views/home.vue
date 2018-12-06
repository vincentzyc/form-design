<template>
  <div class="home text-center">
    <img alt="Vue logo" src="@/assets/img/logo.png" @click="$router.push('/ad')">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/hello-world.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>
