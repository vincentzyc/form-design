<template>
  <div>
    <el-form-item label="验证通过提示语">
      <el-input size="small" v-model="selectWg.successText" />
    </el-form-item>
  </div>
</template>

<script>
export default {
  props: {
    selectWg: {
      type: Object,
      required: true,
    },
  },
};
</script>
