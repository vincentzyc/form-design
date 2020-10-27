<template>
  <section>
    <PopupConfig :selectWg="selectWg" />
    <FixedConfig :selectWg="selectWg" />
    <Common :selectWg="selectWg" />
    <component :is="wgNameMap[selectWg.type]" :selectWg="selectWg" v-if="wgNameMap[selectWg.type]" />
  </section>
</template>

<script>
import FixedConfig from "./fixed-config"
import PopupConfig from "./popup-config"
import Common from "./common"
import WgImgshow from "./imgshow"
import WgImgslide from "./imgslide"
import WgSms from "./sms"
import WgWechat from "./wechat"
import WgAgreement from "./agreement"
import WgMarquee from "./marquee"
import WgMarqueeSingle from "./marquee-single"
import WgVideoPlay from "./video-play"

export default {
  components: {
    Common,
    WgImgshow,
    WgImgslide,
    WgSms,
    WgWechat,
    WgAgreement,
    WgMarquee,
    WgMarqueeSingle,
    WgVideoPlay,
    FixedConfig,
    PopupConfig
    //按需加载
    // WgMarquee: () => import('./marquee'),
    // WgMarqueeFixed: () => import('./marquee-fixed'),
    // ...
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
        sms: 'WgSms',
        wechat: 'WgWechat',
        marquee: 'WgMarquee',
        marqueeSingle: 'WgMarqueeSingle',
        agreement: 'WgAgreement',
        videoPlay: 'WgVideoPlay'
      }
    }
  }
}
</script>