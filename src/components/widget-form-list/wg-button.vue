<template>
  <div class="flex flex-center" :style="item.style">
    <button class="wg-button" :style="item.style.btnStyle">{{item.btnText}}</button>
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