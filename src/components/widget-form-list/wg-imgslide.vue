<template>
  <div class="wg-imgslide">
    <div class="flex flex-center" :style="{margin:item.style.margin}">
      <el-carousel :interval="3000" arrow="never" :style="{width:'100%',height:item.style.height+'px'}">
        <el-carousel-item v-for="(list,key) in item.value" :key="key">
          <img v-if="list.image" :src="list.image" alt="banner" style="width:100%;height:100%">
          <span v-else>{{ '图片' + key+1 }}</span>
        </el-carousel-item>
      </el-carousel>
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