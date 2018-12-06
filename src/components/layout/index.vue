<template>
  <div class="wrapper">
    <header class="header">
      <v-header></v-header>
    </header>
    <div class="sidebar">
      <v-sidebar></v-sidebar>
    </div>
    <div id="container">
      <div
        class="handle-sidebar"
        :class="showSidebar?'el-icon-caret-left':'el-icon-caret-right'"
        @click="toggleSidebar()"
      ></div>
      <div style="min-width: 1100px;">
        <transition name="move" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vHeader from "./header.vue";
import vSidebar from "./sidebar.vue";
export default {
  components: {
    vHeader,
    vSidebar
  },
  data() {
    return {
      showSidebar: true,
      dom_container: ""
    };
  },
  methods: {
    toggleSidebar() {
      this.showSidebar
        ? (document.getElementById("container").style.left = 0)
        : (document.getElementById("container").style.left = "200px");
      this.showSidebar = !this.showSidebar;
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.dom_container = document.getElementById("container");
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
.sidebar {
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #324157;
  -ms-overflow-style: none;
}

::-webkit-scrollbar {
  display: none;
}

#container {
  background: none repeat scroll 0 0 #fff;
  position: absolute;
  left: 200px;
  right: 0;
  top: 70px;
  bottom: 0;
  padding: 40px;
  box-sizing: border-box;
  overflow: auto;
  transition: 0.3s;
}
.handle-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 30px;
}
@media screen and (min-width: 720px) {
  .handle-sidebar {
    display: none;
  }
  .user-info {
    padding-right: 50px;
  }
}
.move-enter-active,
.move-leave-active {
  transition: opacity 0.5s;
}
.move-enter,
.move-leave {
  opacity: 0;
}
</style>

