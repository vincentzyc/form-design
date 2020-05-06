<template>
  <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
    <div class="wg-title" :style="{width:item.label.labelWidth}" v-show="item.showLabel">{{item.label.labelTitle}}</div>
    <div class="flex-auto">
      <input v-model="item.value" :placeholder="item.placeholder" class="wg-input">
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