<template>
  <div>
    <el-form-item label="视频地址">
      <el-input size="small" v-model="selectWg.videoAttr.src" />
    </el-form-item>
    <el-form-item label="封面图片地址">
      <el-input size="small" v-model="selectWg.videoAttr.poster" />
    </el-form-item>
    <el-form-item label="是否自动播放">
      <el-switch v-model="selectWg.videoAttr.autoplay"></el-switch>
    </el-form-item>
    <el-form-item label="内容高度(px)">
      <el-input-number
        v-model="selectWg.videoAttr.height"
        :min="100"
        :max="300"
        size="small"
      />
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