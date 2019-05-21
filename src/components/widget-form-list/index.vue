<template>
  <draggable
    v-model="pageData[list]"
    :options="{group:'widget', ghostClass: 'ghost',swapThreshold:0.5,animation: 100}"
    @add="handleWidgetAdd"
    class="widget-form-list"
    :class="{'widget-empty': pageData[list].length === 0}"
  >
    <template v-for="(item, index) in pageData[list]">
      <div class="widget-view" :key="item.key" :class="{active: selectWg.key === item.key}" @click="handleSelectWidget(index)">
        <!-- 手机 -->
        <WgPhone :item="item"/>

        <!-- 输入框 -->
        <WgInput :item="item"/>

        <!-- 选择框 -->
        <WgCheckbox :item="item"/>

        <!-- 下拉选择 -->
        <WgSelect :item="item"/>

        <!-- 开关 -->
        <WgSwitch :item="item"/>

        <!-- 日期选择 -->
        <WgDate :item="item"/>

        <!-- 图片展示 -->
        <WgImgshow :item="item"/>

        <!-- 图片轮播 -->
        <WgImgslide :item="item"/>

        <!-- 按钮 -->
        <WgButton :item="item"/>

        <!-- 文本描述 -->
        <WgStaticText :item="item"/>

        <!-- 分割线 -->
        <WgSplitLine :item="item"/>

        <!-- 横向滑动自动选择 -->
        <WgHpicker :item="item"/>

        <el-button
          title="删除"
          @click="handleWidgetDelete(index)"
          class="widget-action-delete"
          v-if="selectWg.key === item.key"
          circle
          plain
          type="danger"
        >删除</el-button>
        <el-button
          title="复制"
          @click="handleWidgetClone(index)"
          class="widget-action-clone"
          v-if="selectWg.key === item.key"
          circle
          plain
          type="primary"
        >复制</el-button>
      </div>
    </template>
  </draggable>
</template>

<script>
import { mapState } from 'vuex';
import Draggable from 'vuedraggable'
import WgPhone from './wg-phone'
import WgInput from './wg-input'
import WgCheckbox from './wg-checkbox'
import WgSelect from './wg-select'
import WgSwitch from './wg-switch'
import WgDate from './wg-date'
import WgImgshow from './wg-imgshow'
import WgImgslide from './wg-imgslide'
import WgButton from './wg-button'
import WgStaticText from './wg-statictext'
import WgSplitLine from './wg-splitLine'
import WgHpicker from './wg-hpicker'

export default {
  components: {
    Draggable,
    WgPhone,
    WgInput,
    WgCheckbox,
    WgSelect,
    WgSwitch,
    WgDate,
    WgImgshow,
    WgImgslide,
    WgButton,
    WgStaticText,
    WgSplitLine,
    WgHpicker
  },
  props: {
    list: String
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg,
      pageData: state => state.common.pageData
    })
  },
  methods: {
    handleWidgetAdd(evt) {
      const newIndex = evt.newIndex;

      const elKey = Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      let newObj = this.$util.deepClone(this.pageData[this.list][newIndex]);

      newObj.key = this.pageData[this.list][newIndex].type + '_' + elKey;
      this.$set(this.pageData[this.list], newIndex, newObj);
      this.$store.commit('setSelectWg', this.pageData[this.list][newIndex]);
      this.$store.commit('setConfigTab', "widget");
    },
    handleSelectWidget(index) {
      this.$store.commit('setSelectWg', this.pageData[this.list][index]);
      this.$store.commit('setConfigTab', "widget");
    },
    handleWidgetDelete(index) {
      if (this.pageData[this.list].length - 1 === index) {
        if (index === 0) {
          this.$store.commit('setSelectWg', {})
        } else {
          this.$store.commit('setSelectWg', this.pageData[this.list][index - 1])
        }
      } else {
        this.$store.commit('setSelectWg', this.pageData[this.list][index + 1])
      }
      this.$nextTick(() => {
        this.pageData[this.list].splice(index, 1)
      })
    },
    handleWidgetClone(index) {
      let cloneData = this.$util.deepClone(this.pageData[this.list][index]);
      cloneData.key = this.pageData[this.list][index].type + '_' + Date.now() + '_' + Math.ceil(Math.random() * 1000000)
      this.pageData[this.list].splice(index, 0, cloneData)
      this.$nextTick(() => {
        this.$store.commit('setSelectWg', this.pageData[this.list][index + 1])
      })
    },
  }
}
</script>
