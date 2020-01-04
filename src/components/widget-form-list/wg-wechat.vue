<template>
  <div class="wg-wechat clearfix" :style="{backgroundColor:item.backgroundColor}">
    <div
      v-if="item.style.isImgBtn"
      class="flex flex-center"
      :class="{'img-placeholder':!item.style.value}"
      :style="item.style"
    >
      <img v-if="item.style.value" :src="item.style.value" alt="图片按钮" width="100%" />
      <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示" />
    </div>
    <div v-else class="flex align-middle pd10" :style="item.style">
      <div v-if="item.showLogo" class="wechat-avatar flex-none">
        <img v-if="item.logo" :src="item.logo" alt="公众号logo" width="100%" />
        <img v-else src="@/assets/img/wxlogo.png" alt="公众号logo" width="100%" />
      </div>
      <div v-if="item.showName" class="flex-auto">{{item.value}}</div>
      <div
        class="wechat-btn"
        :class="[item.showName?'flex-none':'flex-auto']"
        :style="item.style.btnStyle"
      >{{item.btnText}}</div>
    </div>
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