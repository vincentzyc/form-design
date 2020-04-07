<template>
  <div class="marquee-outbox">
    <div
      :class="`marquee-inbox-${this.direction}`"
      :style="{animation:`marquee-${this.direction} ${this.durationTime}s linear infinite`}"
    >
      <slot></slot>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'my-marquee',
  props: {
    durationTime: {
      type: Number,
      default: 10
    },
    direction: {
      type: String,
      default: 'up'
    }
  }
}
</script>

<style>
.marquee-outbox {
  width: 100%;
  height: 100px;
  overflow: hidden;
}
.marquee-inbox-up {
  -webkit-animation: marquee-up 5s linear infinite;
  -ms-animation: marquee-up 5s linear infinite;
  -o-animation: marquee-up 5s linear infinite;
  animation: marquee-up 5s linear infinite;
}
.marquee-inbox-left {
  display: inline-flex !important;
  -webkit-animation: marquee-left 5s linear infinite;
  -ms-animation: marquee-left 5s linear infinite;
  -o-animation: marquee-left 5s linear infinite;
  animation: marquee-left 5s linear infinite;
}

@keyframes marquee-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}
@keyframes marquee-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>