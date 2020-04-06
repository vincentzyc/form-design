<template>
  <div class="marquee-outbox" ref="outbox">
    <div
      ref="movebox"
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
    sendVal: Array,
    durationTime: {
      type: Number,
      default: 5
    },
    direction: {
      type: String,
      default: 'up'
    }
  },
  mounted() {
    this.$nextTick(() => {
      // this.$refs.movebox.style.animation = `marquee-${this.direction} ${this.durationTime}s linear infinite`
    })
  }
}
</script>

<style>
.marquee-outbox {
  color: #fee7b1;
  height: 300px;
  margin: 20px;
  background: #fee7b1;
  overflow: hidden;
  border: 2px solid #c46302;
}
.marquee-inbox-up {
  -webkit-animation: marquee-up 5s linear infinite;
  -ms-animation: marquee-up 5s linear infinite;
  -o-animation: marquee-up 5s linear infinite;
  animation: marquee-up 5s linear infinite;
}
.marquee-inbox-left {
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