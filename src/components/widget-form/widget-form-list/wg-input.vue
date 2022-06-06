<template>
  <div class="wg-item wg-padding" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
    <div class="wg-title" :style="{width:item.label.labelWidth}" v-show="item.showLabel">{{item.label.labelTitle}}</div>
    <div class="flex-auto">
      <textarea v-if="item.isTextarea" v-model="item.value" :placeholder="item.placeholder" class="wg-textarea" />
      <input v-else v-model="item.value" :placeholder="item.placeholder" class="wg-input">
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