<template>
  <div :class="wrapClass" :style="wrapStyle" class="flex flex-center">
    <div :class="{'img-placeholder':!item.style.value}" v-if="item.style.isImgBtn">
      <img :src="item.style.value" alt="图片按钮" v-if="item.style.value" width="100%" />
      <img alt="图片展示" src="@/assets/img/img-placeholder.png" v-else />
    </div>
    <button :style="item.style.btnStyle" class="wg-button" v-else>{{item.btnText}}</button>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    wrapStyle() {
      if (!this.item.animation) return this.item.style
      return {
        ...this.item.style,
        ...this.item.animation
      }
    },
    wrapClass() {
      if (!this.item.animation) return ''
      return this.item.animation.className
    }
  }
}
</script>