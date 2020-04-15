<template>
  <section>
    <Common :selectWg="selectWg" />
    <WgImg v-if="selectWg.type==='imgShow'" :selectWg="selectWg" />
    <WeChat v-if="selectWg.type==='wechat'" :selectWg="selectWg" />
    <WgMarquee v-if="selectWg.type==='marquee'" :selectWg="selectWg" />
    <Agreement v-if="selectWg.type==='agreement'" :selectWg="selectWg" />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Common from "./common"
import WgImg from "./imgshow"
import WeChat from "./wechat"
import WgMarquee from "./marquee"
import Agreement from "./agreement"

export default {
  components: {
    Common,
    WgImg,
    WeChat,
    WgMarquee,
    Agreement
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.createh5.pageData,
    })
  }
}
</script>