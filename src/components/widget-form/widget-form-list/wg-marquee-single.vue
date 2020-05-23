<template>
  <div class="wg-marquee-single flex flex-center">
    <ul class="scroll-wrapper" :style="{ ...this.item.style, borderRadius: this.item.style.height }">
      <li
        v-for="(text, i) in scrollList"
        :key="i"
        class="flex align-middle scroll-item"
        :class="{'anim' : animate&&i===0 }"
        :style="{marginTop:animate&&i===0?`-${item.style.height}`:''}"
      >
      <!-- 如需要支持自定义头像，使用 img 标签方式 -->
        <!-- <img
          :src="require(`@/assets/img/${text.sex==='man'?'manhead.png':'womanhead.png'}`)"
          alt="头像"
          class="userimg flex-none"
        />-->
        <span class="userimg flex-none" :class="text.sex==='man'?'man':'woman'" :style="{width:item.style.height}"></span>
        <span class="scroll-text txtover">{{ text.text }}</span>
      </li>
    </ul>
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
  watch: {
    'item.textList': {
      handler(newValue) {
        this.scrollList = this.$util.deepClone(newValue)
      },
      immediate: true,
      deep: true
    },
    'item.durationTime'(newValue) {
      clearInterval(this.scrollTimeId);
      this.scrollTimeId = setInterval(this.scroll, newValue * 1000);
    }
  },
  data() {
    return {
      scrollList: [],
      animate: false,
      animateTimeId: '',
      scrollTimeId: ''
    }
  },
  methods: {
    scroll() {
      if (this.animate) return;
      clearTimeout(this.animateTimeId);
      this.animate = true;
      this.animateTimeId = setTimeout(() => {
        this.scrollList.push(this.scrollList[0]);
        this.scrollList.shift();
        this.animate = false;
      }, 500);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.scrollTimeId = setInterval(this.scroll, this.item.durationTime * 1000);
    })
  },
  beforeDestroy() {
    clearInterval(this.scrollTimeId);
    clearTimeout(this.animateTimeId);
  }
}
</script>