<template>
  <section>
    <Common :selectWg="selectWg" />
    <component v-if="wgNameMap[selectWg.type]" :is="wgNameMap[selectWg.type]" :selectWg="selectWg" />
  </section>
</template>

<script>
import Common from "./common"

export default {
  components: {
    Common,
    WgImgshow: () => import('./imgshow'),
    WgWechat: () => import('./wechat'),
    WgMarquee: () => import('./marquee'),
    // WgMarqueeFixed: () => import('./marquee-fixed'),
    WgAgreement: () => import('./agreement')
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      wgNameMap: {
        imgShow: 'WgImgshow', // 图片展示
        imgSlide: 'WgImgslide', // 图片轮播
        wechat: 'WgWechat', // 微信关注 
        marquee: 'WgMarquee', // 跑马灯 
        // marqueeFixed: 'WgMarqueeFixed', // 跑马灯-悬浮
        agreement: 'WgAgreement', // 用户协议
      }
    }
  }
}
</script>