<template>
  <div>
    <!-- <el-form-item>
      <span class="flex align-middle" slot="label">
        <span class="mg-r20">样式</span>
        <el-button type="primary" size="mini" @click="drawerVisible=true">选择样式</el-button>
      </span>
      <div class="flex mg10">
        <img :src="curStyleImg" alt="已选样式" width="80%" />
      </div>
    </el-form-item>
    <el-drawer :visible.sync="drawerVisible" :withHeader="false" customClass="minwidth300" size="20vw">
      <ul class="style-wrapper">
        <li
          class="flex flex-center pd10 style-item"
          v-for="item in MarqueeList"
          :key="item.value"
          @click="selectStyle(item.data)"
        >
          <img :src="require('@/assets/img/widget/marquee/'+item.value+'.jpg')" alt width="100%" />
        </li>
      </ul>
    </el-drawer> -->

    <component :is="selectWg.marqueeType" :selectWg="selectWg" />
  </div>
</template>

<script>
import MarqueeList from '@/assets/js/widget/marquee-list'
import MarqueeBase from './marquee-base'
// import MarqueeFixed from './marquee-fixed'
// import MarqueeFixedMore from './marquee-fixed-more'

export default {
  components: {
    'marquee-base': MarqueeBase,
    // 'marquee-fixed': MarqueeFixed,
    // 'marquee-fixed-more': MarqueeFixedMore
  },
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // drawerVisible: false,
      MarqueeList: MarqueeList
    }
  },
  // computed: {
  //   curStyleImg() {
  //     let curStyleImg = require('@/assets/img/widget/marquee/' + this.selectWg.marqueeType + '.jpg');
  //     return curStyleImg ? curStyleImg : ""
  //   }
  // },
  // methods: {
  //   selectStyle(data) {
  //     this.$store.commit('setSelectWg', data);
  //     this.drawerVisible = false
  //   }
  // }
}
</script>