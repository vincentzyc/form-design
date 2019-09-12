<template>
  <div class="wg-item" :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']" :style="item.style">
    <div class="wg-title" :style="{width:item.label.labelWidth}" v-show="item.showLabel">{{item.label.labelTitle}}</div>
    <div class="flex-auto">
      <select v-model="item.value" class="wg-select flex-auto">
        <option value disabled selected hidden>{{item.placeholder}}</option>
        <option
          v-for="(optionsItem,key) in item.options"
          :key="optionsItem + key"
          :value="optionsItem"
          :label="item.showLabel?item.label:optionsItem"
        ></option>
      </select>
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