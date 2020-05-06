<template>
  <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
    <div class="wg-title" :style="{width:item.label.labelWidth}">{{item.label.labelTitle}}</div>
    <div class="flex-auto">
      <input type="date" v-model="item.value" class="wg-input flex-auto" />
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