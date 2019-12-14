<template>
  <div
    @click.stop="handleSelectWidget()"
    :class="[Array.isArray(item.list)?'widget-child-form-list':'widget-view',{active: selectWg.key === item.key,'no-padding':noPaddingType.includes(item.type)}]"
    :style="Array.isArray(item.list)?{...item.style,backgroundImage:`url(${item.backgroundImage})`}:{}"
  >
    <!-- 手机 -->
    <WgPhone v-if="item.type === 'phone'" :item="item" />

    <!-- 输入框 -->
    <WgInput v-if="item.type === 'input'" :item="item" />

    <!-- 选择框 -->
    <WgCheckbox v-if="item.type === 'checkbox'" :item="item" />

    <!-- 下拉选择 -->
    <WgSelect v-if="item.type === 'select'" :item="item" />

    <!-- 开关 -->
    <WgSwitch v-if="item.type==='switch'" :item="item" />

    <!-- 日期选择 -->
    <WgDate v-if="item.type === 'date'" :item="item" />

    <!-- 图片展示 -->
    <WgImgshow v-if="item.type === 'imgShow'" :item="item" />

    <!-- 图片轮播 -->
    <WgImgslide v-if="item.type === 'imgSlide'" :item="item" />

    <!-- 按钮 -->
    <WgButton v-if="item.type === 'button'" :item="item" />

    <!-- 文本描述 -->
    <WgStaticText v-if="item.type === 'staticText'" :item="item" />

    <!-- 分割线 -->
    <WgSplitLine v-if="item.type === 'splitLine'" :item="item" />

    <!-- 横向滑动自动选择 -->
    <WgHpicker v-if="item.type === 'h-picker'" :item="item" />

    <!-- 表单内容区 -->
    <WgFormList v-if="item.type === 'formList'" :item="item" />

    <el-button
      title="删除"
      @click.stop="handleWidgetDelete()"
      class="widget-action-btn widget-action-delete"
      v-if="selectWg.key === item.key"
      circle
      plain
      type="danger"
    >删除</el-button>
    <el-button
      title="复制"
      @click.stop="handleWidgetClone()"
      class="widget-action-btn widget-action-clone"
      v-if="selectWg.key === item.key&&!Array.isArray(selectWg.list)"
      circle
      plain
      type="primary"
    >复制</el-button>
  </div>
</template>

<script>
import { mapState } from 'vuex';
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
import WgFormList from './wg-formlist'

export default {
  components: {
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
    WgHpicker,
    WgFormList
  },
  props: {
    item: Object,
    index: Number,
    data: Array
  },
  data() {
    return {
      noPaddingType: ['imgshow', 'staticText']
    }
  },
  computed: {
    ...mapState({
      selectWg: state => state.common.selectWg
    })
  },
  methods: {
    handleSelectWidget() {
      this.$store.commit('setSelectWg', this.data[this.index]);
      this.$store.commit('setConfigTab', "widget");
    },
    handleWidgetDelete() {
      if (this.data.length - 1 === this.index) {
        if (this.index === 0) {
          this.$store.commit('setSelectWg', {})
        } else {
          this.$store.commit('setSelectWg', this.data[this.index - 1])
        }
      } else {
        this.$store.commit('setSelectWg', this.data[this.index + 1])
      }
      this.$nextTick(() => {
        this.data.splice(this.index, 1)
      })
    },
    handleWidgetClone() {
      let cloneData = this.$util.deepClone(this.data[this.index]);
      cloneData.key = cloneData.type + '_' + Date.now() + '_' + Math.ceil(Math.random() * 1000000);
      this.$nextTick(() => {
        this.data.splice(this.index, 0, cloneData)
        this.$store.commit('setSelectWg', this.data[this.index + 1])
      })
    },
  }
}
</script>
