<template>
  <div v-if="item.type === 'splitLine'" class="wg-splitLine">
    <hr class="splitLine-hr" :style="item.style">
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