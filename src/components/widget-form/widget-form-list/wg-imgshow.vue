<template>
  <div class="wg-imgshow" :style="item.style">
    <ul class="flex flex-wrap">
      <li :class="[item.styleType==='col1'?'col-12':'col-6']" v-for="(imgBtn,index) in item.imglist" :key="index">
        <div class="flex flex-center" :class="{'img-placeholder':!imgBtn.img}">
          <img v-if="imgBtn.img" :src="imgBtn.img" alt="图片按钮" width="100%" />
          <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示" />
        </div>
      </li>
    </ul>
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