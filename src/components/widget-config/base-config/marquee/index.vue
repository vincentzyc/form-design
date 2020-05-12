<template>
  <div>
    <component :is="selectWg.type" :selectWg="selectWg" />
  </div>
</template>

<script>
import Marquee from './marquee'

export default {
  components: {
    'marquee': Marquee,
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  }
}
</script>