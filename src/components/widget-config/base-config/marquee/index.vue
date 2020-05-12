<template>
  <div>
    <component :is="selectWg.marqueeType" :selectWg="selectWg" />
  </div>
</template>

<script>
import MarqueeList from '@/assets/js/widget/marquee-list'
import MarqueeBase from './marquee-base'

export default {
  components: {
    'marquee-base': MarqueeBase,
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      MarqueeList: MarqueeList
    }
  }
}
</script>