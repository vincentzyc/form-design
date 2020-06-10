<template>
  <div class="wg-video-play transition03" :style="item.style">
    <video v-bind="item.videoAttr" style="width:100%;height:100%">您的浏览器不支持视频播放哦~</video>
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