<template>
  <div>
    <el-form-item label="微信名称">
      <el-input v-model="selectWg.value" placeholder="请输入您的微信名称"></el-input>
    </el-form-item>
    <el-form-item label="微信账号">
      <el-input v-model="selectWg.wechatName" placeholder="请输入您的微信账号"></el-input>
    </el-form-item>
    <el-form-item label="微信头像">
      <FileUpload :value.sync="selectWg.logo" />
    </el-form-item>
    <el-form-item label="显示微信头像">
      <el-switch v-model="selectWg.showLogo"></el-switch>
    </el-form-item>
    <el-form-item label="显示微信名称">
      <el-switch v-model="selectWg.showName"></el-switch>
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  }
}
</script>