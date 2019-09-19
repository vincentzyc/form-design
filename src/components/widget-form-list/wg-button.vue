<template>
  <div class="flex flex-center" :style="item.style">
    <div v-if="item.style.isImgBtn" :class="{'img-placeholder':!item.style.value}">
      <img v-if="item.style.value" :src="item.style.value" alt="图片按钮" width="100%" />
      <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示" />
    </div>
    <button class="wg-button" :style="item.style.btnStyle" v-else>{{item.btnText}}</button>
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