<template>
  <div
    class="wg-item flex-wrap wg-checkbox"
    :class="[item.label.labelPosition==='top'?'flex-column':'align-middle']"
    :style="item.style"
  >
    <div class="wg-title" :style="{width:item.label.labelWidth}">{{item.label.labelTitle}}</div>
    <div class="flex-auto">
      <label class="label" v-for="(optionsItem, key) in item.options" :key="optionsItem + key">
        <input
          class="wg-checkbox-input"
          :type="item.isRadio?'radio':'checkbox'"
          :value="optionsItem"
          v-model="item.value"
          style="display:none"
        />
        <span>{{optionsItem}}</span>
      </label>
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