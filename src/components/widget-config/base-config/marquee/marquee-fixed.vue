<template>
  <div>
    <el-form-item label="时间（s）" v-if="selectWg.hasOwnProperty('durationTime')">
      <el-input-number v-model="selectWg.durationTime" :min="1" :max="60" size="small" />
    </el-form-item>
  </div>
</template>

<script>
// import Draggable from 'vuedraggable'
export default {
  components: {
    // Draggable
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  methods: {
  }
}
</script>