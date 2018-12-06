<template>
  <div class="base-page">
    <header class="flex breadcrumb align-middle">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="flex-auto">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in paths" :key="item">{{item}}</el-breadcrumb-item>
      </el-breadcrumb>
      <h2 class="flex-auto text-center">{{title}}</h2>
      <el-button type="primary" @click="$emit('handleBack')" v-if="!hideBack">返回上一页</el-button>
    </header>
    <main class="content">
      <slot name="content">{{content}}</slot>
    </main>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "base-page",
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
    paths: {
      type: Array,
      default() {
        return [];
      }
    },
    content: {
      type: String,
      default: ""
    },
    hideBack: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.base-page {
  position: relative;
  width: 100%;
  height: 100%;
  background: #fff;
}
.breadcrumb {
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 1px solid #999;
}
.base-page .content {
  margin: 10px;
}
</style>
