<template>
  <div class="wg-imgshow">
    <div class="flex flex-center" :class="{'img-placeholder':!item.value}" :style="item.style">
      <img v-if="item.value" :src="item.value" alt="图片展示" width="100%">
      <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示">
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