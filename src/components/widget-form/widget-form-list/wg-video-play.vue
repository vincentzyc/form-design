<template>
  <div class="wg-video-play" :style="item.style">
    <video v-bind="item.videoAttr">您的浏览器不支持视频播放哦~</video>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>