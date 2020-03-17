<template>
  <section>
    <Common :selectWg="selectWg" />
    <WgImg v-if="selectWg.type==='imgShow'" :selectWg="selectWg" />
    <WeChat v-if="selectWg.type==='wechat'" :selectWg="selectWg" />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import Common from "./common"
import WgImg from "./imgshow"
import WeChat from "./wechat"

export default {
  components: {
    Common,
    WgImg,
    WeChat
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