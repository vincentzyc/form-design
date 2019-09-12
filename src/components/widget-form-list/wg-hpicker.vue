<template>
  <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
    <div class="wg-title" :style="{width:item.label.labelWidth}">{{item.label.labelTitle}}</div>
    <div class="wg-horizontal-picker" :style="{width:item.itemWidth*item.showNumber+'px'}">
      <div
        class="picker-item"
        v-for="(optionsItem,key) in item.options"
        :key="optionsItem + key"
        :style="key===0?{ ...item.pickerStyle, width:item.itemWidth+'px' }:{width:item.itemWidth+'px'}"
      >{{optionsItem}}</div>
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