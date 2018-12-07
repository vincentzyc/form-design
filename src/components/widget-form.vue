<template>
  <el-menu
    :default-active="onRoutes"
    class="sidebar-menu"
    unique-opened
    router
    background-color="#324157"
    text-color="#bbc9da"
    active-text-color="#20a0ff"
  >
    <template v-for="item in items">
      <template v-if="item.subs">
        <el-submenu :index="item.index" :key="item.index">
          <template slot="title">
            <i :class="item.icon"></i>
            {{ item.title }}
          </template>
          <el-menu-item
            v-for="(subItem,i) in item.subs"
            :key="i"
            :index="subItem.index"
          >{{ subItem.title }}</el-menu-item>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="item.index" :key="item.index">
          <i :class="item.icon"></i>
          {{ item.title }}
        </el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
import crmMenus from "@/assets/json/sidebar.json";
export default {
  data() {
    return {
      items: crmMenus
    };
  },
  computed: {
    onRoutes() {
      return "/" + this.$route.path.split("/")[1];
    }
  }
};
</script>

<style scoped>
.sidebar-menu {
  height: 100%;
  overflow-y: auto;
}
</style>


