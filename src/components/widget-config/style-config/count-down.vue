<template>
  <div>
    <el-form-item label="时间单位大小">
      <el-input-number
        :max="30"
        :min="10"
        :step="1"
        @change="val=>selectWg.unitStyle.fontSize = `${val}px`"
        size="small"
        step-strictly
        v-model="selectWg.unitStyle.fontsize"
      />
    </el-form-item>
    <el-form-item label="时间单位颜色">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.unitStyle.color" />
    </el-form-item>
    <el-form-item label="时间颜色">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.timeStyle.color" />
    </el-form-item>
    <el-form-item label="时间背景颜色">
      <el-color-picker :predefine="predefineColors" show-alpha v-model="selectWg.timeStyle.backgroundColor" />
    </el-form-item>
    <el-form-item label="时间大小">
      <el-input-number
        :max="30"
        :min="10"
        :step="1"
        @change="val=>selectWg.timeStyle.fontSize = `${val}px`"
        size="small"
        step-strictly
        v-model="selectWg.timeStyle.fontsize"
      />
    </el-form-item>
    <el-form-item label="时间圆角">
      <el-input-number
        :max="20"
        :min="0"
        :step="1"
        @change="val=>selectWg.timeStyle.borderRadius = `${val}px`"
        size="small"
        step-strictly
        v-model="selectWg.timeStyle.borderradius"
      />
    </el-form-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      predefineColors: state => state.createh5.predefineColors
    })
  }
}
</script>