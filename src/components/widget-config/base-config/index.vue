<template>
  <section>
    <FixedConfig :selectWg="selectWg" />
    <Common :selectWg="selectWg" />
    <component v-if="wgNameMap[selectWg.type]" :is="wgNameMap[selectWg.type]" :selectWg="selectWg" />
  </section>
</template>

<script>
import FixedConfig from "./fixed-config"
import Common from "./common"
import WgImgshow from "./imgshow"
import WgWechat from "./wechat"
import WgAgreement from "./agreement"
import WgMarquee from "./marquee"

export default {
  components: {
    Common,
    WgImgshow,
    WgWechat,
    WgAgreement,
    WgMarquee,
    FixedConfig
    //按需加载
    // WgImgshow: () => import('./imgshow'),
    // WgWechat: () => import('./wechat'),
    // WgAgreement: () => import('./agreement'),
    // WgMarquee: () => import('./marquee'),
    // WgMarqueeFixed: () => import('./marquee-fixed'),

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