<template>
  <div :style="item.style">
    <ul class="flex flex-wrap">
      <li :class="[item.styleType==='col1'?'col-12':'col-6']" v-for="(smsBtn,index) in item.smslist" :key="index">
        <div class="flex flex-center" :style="{padding:item.style.btnPadding}">
          <div v-if="item.isImgBtn" :class="{'img-placeholder':!smsBtn.img}">
            <img v-if="smsBtn.img" :src="smsBtn.img" alt="图片按钮" width="100%" />
            <img v-else src="@/assets/img/img-placeholder.png" alt="图片展示" />
          </div>
          <button class="wg-button" :style="item.style.btnStyle" v-else>{{smsBtn.btnText}}</button>
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