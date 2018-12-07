<template>
  <div class="wrapper">
    <header class="header">
      <v-header/>
    </header>
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
.header {
  position: relative;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: #242f42;
}
.widget-form {
  position: absolute;
  width: 300px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #324157;
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}

.design-form {
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 300px;
  right: 300px;
  top: 70px;
  bottom: 0;
  padding: 40px;
  box-sizing: border-box;
  overflow: auto;
}
.widget-config {
  position: absolute;
  width: 300px;
  right: 0;
  top: 70px;
  bottom: 0;
  background: #324157;
  -ms-overflow-style: none;
}
</style>

