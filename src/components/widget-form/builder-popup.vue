<template>
  <transition name="el-fade-in-linear" v-if="value">
    <div ref="customPopup" class="custom-popup-fixed" :style="setStyle">
      <div class="custom-popup" @click="close"></div>
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
      if (n) {
        this.setClientRect()
      } else {
        if (this.$el && this.$el.parentNode) {
          this.$el.parentNode.removeChild(this.$el);
        }
      }
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
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
