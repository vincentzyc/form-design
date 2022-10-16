<template>
  <div
    ref="dragVerify"
    class="drag_verify"
    :style="dragVerifyStyle"
    @mousemove="dragMoving"
    @mouseup="dragFinish"
    @mouseleave="dragFinish"
    @touchmove="dragMoving"
    @touchend="dragFinish"
  >
    <div class="dv_progress_bar" :class="{ goFirst2: isOk }" ref="progressBar" :style="progressBarStyle"> </div>
    <div class="dv_text" :style="textStyle" ref="message">
      <slot name="textBefore" v-if="$slots.textBefore"></slot>
      {{ message }}
      <slot name="textAfter" v-if="$slots.textAfter"></slot>
    </div>

    <div
      class="dv_handler dv_handler_bg"
      :class="{ goFirst: isOk }"
      @mousedown="dragStart"
      @touchstart="dragStart"
      ref="handler"
      :style="handlerStyle"
    >
      <div style="width: 24px; height: 24px">
        <svg v-if="isPassing" viewBox="0 0 1024 1024">
          <path
            fill="#76c61d"
            d="M512 960C264 960 64 759 64 512S264 64 512 64s448 200 448 448S759 960 512 960zM512 128C300 128 128 300 128 512c0 211 172 383 383 383 211 0 383-172 383-383C895 300 723 128 512 128z"
          ></path>
          <path
            fill="#76c61d"
            d="M726 393c-12-12-32-12-45 0l-233 235-103-106c-12-12-32-12-45-0-12 12-12 32-0 45l126 129c0 0 0 0 0 0 0 0 0 0 0 0 2 1 4 3 6 4 1 0 2 1 3 2 3 1 8 2 12 2 4 0 8-0 11-2 1-0 2-1 3-2 2-1 4-2 6-4 0-0 0-0 0-0 0-0 0-0 0-0l256-259C739 425 739 405 726 393z"
          ></path>
        </svg>
        <svg v-else viewBox="0 0 1027 1024">
          <path
            fill="#8a8a8a"
            d="M189 794c-10 0-20-3-28-11-15-15-15-40 0-56L408 479 160 231c-15-15-15-40 0-56 15-15 40-15 56 0l275 275c7 7 11 17 11 28 0 10-4 20-11 28L217 782C209 790 199 794 189 794zM557 794c-10 0-20-3-28-11-15-15-15-40 0-56l246-246L528 231c-15-15-15-40 0-56 15-15 40-15 56 0l275 275c15 15 15 40 0 56L585 782C578 790 567 794 557 794z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dragVerify",
  props: {
    isPassing: {
      type: Boolean,
      default: false,
    },
    width: {
      type: Number,
      default: 250,
    },
    height: {
      type: Number,
      default: 40,
    },
    text: {
      type: String,
      default: "swiping to the right side",
    },
    successText: {
      type: String,
      default: "success",
    },
    background: {
      type: String,
      default: "#eee",
    },
    progressBarBg: {
      type: String,
      default: "#76c61d",
    },
    completedBg: {
      type: String,
      default: "#76c61d",
    },
    circle: {
      type: Boolean,
      default: false,
    },
    radius: {
      type: String,
      default: "4px",
    },
    handlerIcon: {
      type: String,
    },
    successIcon: {
      type: String,
    },
    handlerBg: {
      type: String,
      default: "#fff",
    },
    textSize: {
      type: String,
      default: "14px",
    },
    textColor: {
      type: String,
      default: "#333",
    },
  },
  mounted: function() {
    const dragEl = this.$refs.dragVerify;
    dragEl.style.setProperty("--textColor", this.textColor);
    dragEl.style.setProperty("--width", Math.floor(this.width / 2) + "px");
    dragEl.style.setProperty("--pwidth", -Math.floor(this.width / 2) + "px");
  },
  computed: {
    handlerStyle: function() {
      return {
        width: this.height + "px",
        height: this.height + "px",
        background: this.handlerBg,
      };
    },
    message: function() {
      return this.isPassing ? this.successText : this.text;
    },
    dragVerifyStyle: function() {
      return {
        width: this.width + "px",
        height: this.height + "px",
        lineHeight: this.height + "px",
        background: this.background,
        borderRadius: this.circle ? this.height / 2 + "px" : this.radius,
      };
    },
    progressBarStyle: function() {
      return {
        background: this.progressBarBg,
        height: this.height + "px",
        borderRadius: this.circle ? this.height / 2 + "px 0 0 " + this.height / 2 + "px" : this.radius,
      };
    },
    textStyle: function() {
      return {
        height: this.height + "px",
        width: this.width + "px",
        fontSize: this.textSize,
      };
    },
  },
  data() {
    return {
      isMoving: false,
      x: 0,
      isOk: false,
    };
  },
  methods: {
    dragStart(e) {
      e.preventDefault();
      if (!this.isPassing) {
        this.isMoving = true;
        this.x = e.pageX || e.touches[0].pageX;
      }
      this.$emit("handlerMove");
    },
    dragMoving(e) {
      if (this.isMoving && !this.isPassing) {
        var _x = (e.pageX || e.touches[0].pageX) - this.x;
        var handler = this.$refs.handler;
        if (_x > 0 && _x <= this.width - this.height) {
          handler.style.left = _x + "px";
          this.$refs.progressBar.style.width = _x + this.height / 2 + "px";
        } else if (_x > this.width - this.height) {
          handler.style.left = this.width - this.height + "px";
          this.$refs.progressBar.style.width = this.width - this.height / 2 + "px";
          this.passVerify();
        }
      }
    },
    dragFinish(e) {
      if (this.isMoving && !this.isPassing) {
        var _x = (e.pageX || e.changedTouches[0].pageX) - this.x;
        if (_x < this.width - this.height) {
          this.isOk = true;
          setTimeout(() => {
            this.$refs.handler.style.left = "0";
            this.$refs.progressBar.style.width = "0";
            this.isOk = false;
          }, 500);
          this.$emit("passfail");
        } else {
          var handler = this.$refs.handler;
          handler.style.left = this.width - this.height + "px";
          this.$refs.progressBar.style.width = this.width - this.height / 2 + "px";
          this.passVerify();
        }
        this.isMoving = false;
      }
    },
    passVerify() {
      this.$emit("update:isPassing", true);
      this.isMoving = false;
      const handler = this.$refs.handler;
      handler.children[0].className = this.successIcon;
      this.$refs.progressBar.style.background = this.completedBg;
      this.$refs.message.style["-webkit-text-fill-color"] = "unset";
      this.$refs.message.style.color = "#fff";
      this.$emit("passcallback");
    },
    reset() {
      const oriData = this.$options.data();
      for (const key in oriData) {
        if (Object.prototype.hasOwnProperty.call(oriData, key)) {
          this[key] = oriData[key];
        }
      }
      this.$emit("update:isPassing", false);
      const handler = this.$refs.handler;
      const message = this.$refs.message;
      handler.style.left = "0";
      this.$refs.progressBar.style.width = "0";
      handler.children[0].className = this.handlerIcon;
      message.style["-webkit-text-fill-color"] = "transparent";
      message.style.color = this.background;
    },
  },
};
</script>
<style scoped>
.drag_verify {
  position: relative;
  background-color: #e8e8e8;
  text-align: center;
  overflow: hidden;
  margin: auto;
  border: 1px solid #eee;
}
.drag_verify .dv_handler {
  position: absolute;
  top: 0px;
  left: 0px;
  cursor: move;
  cursor: move;
  display: flex;
  align-items: center;
  justify-content: center;
}
.drag_verify .dv_progress_bar {
  position: absolute;
  height: 34px;
  width: 0px;
}
.drag_verify .dv_text {
  position: absolute;
  top: 0px;
  color: transparent;
  -moz-user-select: none;
  -webkit-user-select: none;
  user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, var(--textColor)),
    color-stop(0.4, var(--textColor)),
    color-stop(0.5, #fff),
    color-stop(0.6, var(--textColor)),
    color-stop(1, var(--textColor))
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-size-adjust: none;
  animation: slidetounlock 3s infinite;
}
.drag_verify .dv_text * {
  -webkit-text-fill-color: var(--textColor);
}
.goFirst {
  left: 0px !important;
  transition: left 0.5s;
}
.goFirst2 {
  width: 0px !important;
  transition: width 0.5s;
}

@keyframes slidetounlock {
  0% {
    background-position: var(--pwidth) 0;
  }
  100% {
    background-position: var(--width) 0;
  }
}
</style>
