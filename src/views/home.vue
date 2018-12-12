<template>
  <div class="wrapper">
    <header class="header">
      <v-header/>
    </header>
    <div class="container">
      <div class="builder-form">
        <div class="widget-form">
          <widgetForm/>
        </div>
        <div class="design-form">
          <designForm/>
        </div>
        <div class="widget-config">
          <widgetConfig/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "@/components/header.vue";
import widgetForm from "@/components/widget-form.vue";
import designForm from "@/components/design-form.vue";
import widgetConfig from "@/components/widget-config.vue";
export default {
  components: {
    vHeader,
    widgetForm,
    designForm,
    widgetConfig
  },
  data() {
    return {
    };
  },
  methods: {

  },
  mounted() {
    this.$nextTick(function () {

    });
  }
};
</script>
<style scoped>
.wrapper {
  height: 100%;
  background: #324157;
}
.header {
  position: relative;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: #242f42;
}
.container {
  width: 100%;
  height: calc(100% - 70px);
  overflow: auto;
}
.builder-form {
  position: relative;
  display: flex;
  width: 1360px;
  height: 100%;
  margin: 0 auto;
}
.widget-form {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  margin-right: 20px;
  -ms-overflow-style: none;
}

.design-form {
  position: absolute;
  top: 0;
  left: 320px;
  bottom: 0;
  background: #fff;
  width: 720px;
  padding: 40px;
  box-sizing: border-box;
  overflow: auto;
}
.widget-config {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background: #fff;
  margin-left: 20px;
  -ms-overflow-style: none;
}
:not(.container)::-webkit-scrollbar {
  display: none;
}
</style>

