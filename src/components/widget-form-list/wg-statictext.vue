<template>
  <div class="wg-staticText clearfix" :style="{backgroundColor:item.backgroundColor,backgroundImage:`url(${item.backgroundImage||''})`}">
    <p :style="item.style" v-html="item.value"></p>
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