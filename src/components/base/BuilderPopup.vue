<template>
  <transition name="el-fade-in-linear" v-if="value">
    <div :style="setStyle" class="custom-popup-fixed" ref="customPopup">
      <div @click="close" class="custom-popup"></div>
      <div class="custom-popup-body">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    value: Boolean
  },
  data() {
    return {
      setStyle: {}
    }
  },
  watch: {
    value(n) {
      if (n) return this.setClientRect()
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
      this.$emit('close')
    },
    setClientRect() {
      let domWrapper = document.getElementById('widget-form-wrapper'),
        domContainer = document.getElementById('widget-form-container'),
        domWrapperHeight = domWrapper.clientHeight || domWrapper.offsetHeight,
        domContainerHeight = domContainer.clientHeight || domContainer.offsetHeight,
        fixedHeight = Math.min(domWrapperHeight, domContainerHeight);
      this.setStyle = {
        width: (domWrapper.clientWidth || domWrapper.offsetWidth || 0) + 'px',
        height: (fixedHeight || 0) + 20 + 'px'
      }
      domWrapper.insertBefore(this.$el, domContainer)
    }
  }
}
</script>
