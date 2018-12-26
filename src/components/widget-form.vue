<template>
  <div class="widget-form-wrapper">
    <div class="widget-form-container" :style="{background:pageData.config.background}">
      <img v-if="theme" :src="themeBanner" alt="banner" width="100%">
      <widget-form-list list="formList" v-if="theme" :class="theme.value"/>
      <widget-form-list list="list"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import WidgetFormList from './widget-form-list'

export default {
  components: {
    WidgetFormList
  },
  data() {
    return {
    }
  },
  computed: {
    themeBanner() {
      if (this.theme.banner.includes("http")) {
        return this.theme.banner;
      }
      return this.BASE_URL + this.theme.banner;
    },
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData,
      theme: state => state.common.pageData.config.theme,
    })
  },
  methods: {
    handleMoveEnd({ newIndex, oldIndex }) {
      console.log('index', newIndex, oldIndex)
    },
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex

      //为拖拽到容器的元素添加唯一 key
      const key = Date.parse(new Date()) + '_' + Math.ceil(Math.random() * 99999)
      let newObj = this.$api.deepClone(this.pageData.list[newIndex]);
      // 绑定键值
      newObj.key = this.pageData.list[newIndex].type + '_' + key;
      this.$set(this.pageData.list, newIndex, newObj)
      this.$store.commit('setSelectWg', this.pageData.list[newIndex])
    }
  }
}
</script>
