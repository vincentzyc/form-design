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
import WgMarqueeSingle from "./marquee-single"

export default {
  components: {
    Common,
    WgImgshow,
    WgWechat,
    WgAgreement,
    WgMarquee,
    WgMarqueeSingle,
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
        imgShow: 'WgImgshow',
        imgSlide: 'WgImgslide',
        wechat: 'WgWechat',
        marquee: 'WgMarquee',
        marqueeSingle: 'WgMarqueeSingle',
        agreement: 'WgAgreement'
      }
    }
  }
}
</script>