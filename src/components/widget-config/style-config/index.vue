<template>
  <section>
    <component :is="wgNameMap[selectWg.type]" :selectWg="selectWg" v-if="showWgName" />
    <Common :selectWg="selectWg" />
  </section>
</template>

<script>
import Common from "./common"
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  components: {
    Common,
  },
  data() {
    return {
      wgNameMap: {
        countDown: () => import("./count-down")
      }
    }
  },
  computed: {
    showWgName() {
      if (!this.wgNameMap[this.selectWg.type]) return false
      return true
    }
  }
}
</script>