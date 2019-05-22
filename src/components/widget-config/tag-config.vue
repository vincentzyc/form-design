<template>
  <section>
    <el-form-item label="标签名称" v-if="selectWg.label.hasOwnProperty('labelTitle')">
      <el-input v-model="selectWg.label.labelTitle"></el-input>
    </el-form-item>
    <el-form-item label="标签宽度(px)" v-if="selectWg.label.hasOwnProperty('labelwidth')">
      <el-input-number v-model="selectWg.label.labelwidth" :min="30" :max="300" size="small" @change="val=>selectWg.label.labelWidth = `${val}px`"/>
    </el-form-item>
    <el-form-item label="标签对齐方式" v-if="selectWg.label.hasOwnProperty('labelPosition')">
      <el-radio-group v-model="selectWg.label.labelPosition" size="mini">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="top">顶部对齐</el-radio-button>
      </el-radio-group>
    </el-form-item>
  </section>
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