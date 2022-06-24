<template>
  <div>
    <p class="lh20 c999 fs12">本页面暂无法看到倒计时效果，请点击预览查看</p>
    <el-form-item label="标题">
      <el-input v-model.trim="selectWg.title"></el-input>
    </el-form-item>
    <el-form-item label="倒计时方式">
      <el-select placeholder="请选择倒计时方式" v-model="selectWg.countDownType">
        <el-option :value="CountDownTypes.endTime" label="自定义结束时间"></el-option>
        <el-option :value="CountDownTypes.dayLoop" label="自动天循环"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="倒计时结束时间" v-if="selectWg.countDownType==='endTime'">
      <el-date-picker
        :picker-options="pickerOptions"
        placeholder="选择结束时间"
        type="datetime"
        v-model="selectWg.endTime"
        value-format="timestamp"
      ></el-date-picker>
    </el-form-item>
  </div>
</template>

<script>
import { CountDownTypes } from "@/assets/js/widget/count-down/count-down"
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      CountDownTypes: CountDownTypes,
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() < Date.now() - 3600 * 1000 * 24
        }
      },
    }
  }
}
</script>