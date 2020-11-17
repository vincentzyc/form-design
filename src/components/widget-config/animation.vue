<template>
  <section class="animation-config">
    <el-form-item label="动画选择">
      <ul>
        <li :key="item.value" @click="selectAnimation(item.value)" class="pd10" v-for="item in animationList">
          <div :style="getStyle(item.value)" class="animation-demo">{{item.name}}</div>
        </li>
      </ul>
    </el-form-item>
    <el-form-item label="动画时间">
      <div class="pd-l10 pd-r10 pd-b20">
        <el-slider
          :format-tooltip="val=> val+'秒'"
          :marks="{0.5:'0.5秒',1:'1秒',1.5:'1.5秒'}"
          :max="2"
          :min="0.2"
          :step="0.1"
          @change="v=>selectWg.animation.animationDuration=v+'s'"
          v-model="selectWg.animation.animationduration"
        ></el-slider>
      </div>
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
  },
  data() {
    return {
      animationList: [{
        name: "呼吸灯",
        value: "animte-breathlamp"
      }, {
        name: "渐变",
        value: "animte-fade"
      }]
    }
  },
  methods: {
    getStyle(name) {
      return {
        animation: `${name} 1s infinite alternate`
      }
    },
    selectAnimation(name) {
      this.selectWg.animation.animationName = name
      this.selectWg.animation.className = name
    }
  }
}
</script>