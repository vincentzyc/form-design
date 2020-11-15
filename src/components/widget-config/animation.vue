<template>
  <section>
    <el-form-item label="动画选择" v-if="selectWg.style.hasOwnProperty('animationName')">
      <ul>
        <li>呼吸灯</li>
        <li>渐变</li>
      </ul>
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