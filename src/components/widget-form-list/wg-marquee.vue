<template>
  <div
    class="wg-marquee"
    :class="{'flex align-middle':this.item.direction === 'left'}"
    :style="item.style"
    ref="wgMarquee"
  >
    <div
      :class="inlineClass"
      :style="{animation:`marquee-${this.item.direction} ${this.item.durationTime}s linear infinite`}"
    >
      <template v-if="item.isImgBtn">
        <img v-if="item.imgUrl" :src="item.imgUrl" alt="图片" :style="imgStyle" />
        <img v-else src="@/assets/img/img-placeholder.png" alt="图片" :style="imgStyle" />
        <img v-if="item.imgUrl" :src="item.imgUrl" alt="图片" :style="imgStyle" />
        <img v-else src="@/assets/img/img-placeholder.png" alt="图片" :style="imgStyle" />
      </template>
      <template v-else>
        <p
          v-for="(texts,key) in [...item.textList,...item.textList]"
          :key="key"
          class="flex space-around"
          :style="{width:marqueeWidth+'px'}"
        >
          <span v-for="(text,i) in texts.split(/\s+/)" :key="i">{{text}}</span>
        </p>
      </template>
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
  },
  data() {
    return {
      marqueeWidth: 0
    }
  },
  computed: {
    imgStyle() {
      return {
        width: this.marqueeWidth + 'px',
        height: this.item.direction === 'left' ? this.item.style.height : 'auto'
      }
    },
    inlineClass() {
      return this.item.direction === 'left' ? ['wg-marquee-left', 'flex-inline'] : ['wg-marquee-up']
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.marqueeWidth = this.$refs.wgMarquee.offsetWidth || this.$refs.wgMarquee.clientWidth
    })
  }
}
</script>