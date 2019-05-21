<template>
  <div v-if="item.type === 'staticText'" class="wg-staticText">
    <p :style="item.style">{{item.value}}</p>
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