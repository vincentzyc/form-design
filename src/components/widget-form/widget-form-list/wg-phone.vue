<template>
  <div class="wg-phone" :style="item.style">
    <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']">
      <div class="wg-title" :style="{width:item.label.labelWidth}" v-show="item.showLabel">{{item.label.labelTitle}}</div>
      <div class="flex-auto">
        <input class="wg-input" v-model="item.value" :placeholder="item.placeholder">
      </div>
    </div>
    <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" v-if="item.showCode">
      <div class="wg-title flex-none" v-show="item.showLabel" :style="{width:item.label.labelWidth}">验证码</div>
      <div class="flex flex-auto">
        <input placeholder="验证码" class="wg-input">
        <button class="getVerCode-btn" :style="item.style.btnStyle">获取验证码</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>