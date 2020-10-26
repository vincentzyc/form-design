<template>
  <div
    :class="[item.wgClassName?item.wgClassName:'widget-view',{active: selectWg.key === item.key}]"
    :style="wgViewStyle"
    @click.stop="handleSelectWidget()"
  >
    <i class="el-icon-rank" v-if="Array.isArray(item.list)"></i>
    <component :is="wgNameMap[item.type]" :item="item" />
    <span
      @click.stop="handleWidgetDelete()"
      class="widget-action-btn widget-action-delete el-icon-delete"
      title="删除"
      v-if="selectWg.key === item.key"
    ></span>
    <span
      @click.stop="handleWidgetClone()"
      class="widget-action-btn widget-action-clone el-icon-document-copy"
      title="复制"
      v-if="clonebtn"
    ></span>
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
import WgSms from './wg-sms'
import WgWechat from './wg-wechat'
import WgMarquee from './wg-marquee'
import WgMarqueeSingle from './wg-marquee-single'
import WgAgreement from './wg-agreement'
import WgRandomCode from './wg-random-code'
import WgVideoPlay from './wg-video-play'

export default {
  name: "WidgetFormList",
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
    WgSms,
    WgWechat,
    WgMarquee,
    WgMarqueeSingle,
    WgAgreement,
    WgRandomCode,
    WgVideoPlay,
    WgFormList: () => import('./wg-formlist')

    //下面是按需加载，组件多的话可选择此方式
    // WgPhone: () => import('./wg-phone'),
    // WgInput: () => import('./wg-input'),
    // WgCheckbox: () => import('./wg-checkbox'),
    // WgSelect: () => import('./wg-select'),
    // WgSwitch: () => import('./wg-switch'),
    // WgDate: () => import('./wg-date'),
    // WgImgshow: () => import('./wg-imgshow'),
    // WgImgslide: () => import('./wg-imgslide'),
    // WgButton: () => import('./wg-button'),
    // WgStaticText: () => import('./wg-statictext'),
    // WgSplitLine: () => import('./wg-splitLine'),
    // WgHpicker: () => import('./wg-hpicker'),
    // WgSms: () => import('./wg-sms'),
    // WgWechat: () => import('./wg-wechat'),
    // WgMarquee: () => import('./wg-marquee'),
    // WgMarqueeFixed: () => import('./wg-marquee-fixed'),
    // WgAgreement: () => import('./wg-agreement'),
    // WgRandomCode: () => import('./wg-random-code'),
    // WgVideoPlay: () => import('./wg-video-play'),
    // WgFormList: () => import('./wg-formlist')
  },
  props: {
    item: Object,
    index: Number,
    data: Array
  },
  data() {
    return {
      wgNameMap: {
        phone: 'WgPhone', // 手机
        input: 'WgInput', // 输入框
        checkbox: 'WgCheckbox', // 选择框
        select: 'WgSelect', // 下拉选择
        switch: 'WgSwitch', // 开关
        date: 'WgDate', // 日期选择
        imgShow: 'WgImgshow', // 图片展示
        imgSlide: 'WgImgslide', // 图片轮播
        button: 'WgButton', // 按钮
        staticText: 'WgStaticText', // 文本描述
        splitLine: 'WgSplitLine', // 分割线
        hPicker: 'WgHpicker', // 横向滑动自动选择
        sms: 'WgSms', // 短信发送 
        wechat: 'WgWechat', // 微信关注 
        marquee: 'WgMarquee', // 跑马灯 
        marqueeSingle: 'WgMarqueeSingle', // 跑马灯-单个
        agreement: 'WgAgreement', // 用户协议
        randomCode: 'WgRandomCode', //随机码
        videoPlay: 'WgVideoPlay',//视频播放
        formList: 'WgFormList', // 表单内容区 
      }
    }
  },
  computed: {
    clonebtn() {
      if (this.selectWg.positionFixed && this.selectWg.positionFixed !== 'auto') return false;
      if (this.selectWg.fixedBottom) return false;
      if (Array.isArray(this.selectWg.list)) return false;
      if (this.selectWg.key === this.item.key) return true;
      return false;
    },
    wgViewStyle() {
      if (Array.isArray(this.item.list)) return { ...this.item.style, backgroundImage: `url(${this.item.backgroundImage})` };
      return {}
    },
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
