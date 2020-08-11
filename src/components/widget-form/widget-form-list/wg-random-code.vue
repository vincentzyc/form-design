<template>
  <div class="wg-random-code wg-padding" :style="item.style">
    <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']">
      <div class="wg-title" :style="{width:item.label.labelWidth}" v-show="item.showLabel">{{item.label.labelTitle}}</div>
      <div class="flex flex-auto align-middle">
        <input class="wg-input" v-model="item.value" :placeholder="item.placeholder" />
        <button class="random-code flex-none" :style="item.style.btnStyle">AaZ1</button>
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