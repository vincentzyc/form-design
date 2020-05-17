<template>
  <div>
    <el-form-item label="显示位置" v-if="selectWg.hasOwnProperty('positionFixed')">
      <el-radio-group v-model="selectWg.positionFixed" size="small">
        <el-radio-button label="auto">正常</el-radio-button>
        <!-- <el-radio-button label="top">顶部悬浮</el-radio-button> -->
        <el-radio-button label="custom">自定义</el-radio-button>
        <el-radio-button label="bottom">底部悬浮</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="底部悬浮" v-if="selectWg.hasOwnProperty('fixedBottom')">
      <el-switch v-model="selectWg.fixedBottom" @change="setFixedBottom"></el-switch>
    </el-form-item>
    <el-form-item label="设置页面滑动距离显示悬浮内容" v-if="selectWg.fixedBottom&&selectWg.hasOwnProperty('scrollHeight')">
      <p class="lh24 c999 fs12">请预览查看具体效果（0则一直显示）</p>
      <el-input-number v-model="selectWg.scrollHeight" :min="0" :max="1000" :step="1" step-strictly size="small" />
      <span class="mg-l10">px</span>
    </el-form-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: {
    selectWg: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      listKey: {
        bottom: 'fixedBottom',
        custom: 'fixedCustom',
        auto: 'list',
      }
    }
  },
  watch: {
    'selectWg.positionFixed': {
      handler(newValue, oldValue) {
        if (newValue && oldValue) {
          if (newValue === 'bottom') return this.setFixedBottom(oldValue)
          if (newValue === 'custom') return this.setFixedCustom(oldValue)
          if (newValue === 'auto') return this.setPositionAuto(oldValue)
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.common.pageData,
    })
  },
  methods: {
    deleteArrayEle(array, key) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.key === key) return array.splice(index, 1);
        if (Array.isArray(element.list) && element.list.length > 0) this.deleteArrayEle(element.list, key)
      }
    },
    setPageFixed(key, oldPosition) {
      if (['fixedBottom', 'fixedCustom'].includes(key)) {
        let oldListKey = this.listKey[oldPosition];
        if (!oldListKey) return
        this.deleteArrayEle(this.pageData[oldListKey], this.selectWg.key);
        this.pageData[key] = [];
        this.pageData[key].push(this.selectWg)
      }
    },
    // 为兼容之前底部悬浮配置，oldPosition可能为boolean值
    setFixedBottom(oldPosition) {
      if (oldPosition) {
        if (oldPosition === true) oldPosition = 'auto'; // 兼容之前底部悬浮配置
        if (this.pageData.fixedBottom.length > 0) {
          if (this.pageData.fixedBottom.some(v => v.key === this.selectWg.key)) return
          this.$confirm('当前页面已有底部悬浮，为保证视觉效果，是否替换当前组件？', '底部悬浮').then(() => {
            this.setPageFixed('fixedBottom', oldPosition)
          }).catch(() => {
            if (this.selectWg.hasOwnProperty('fixedBottom')) this.selectWg.fixedBottom = false;
            if (this.selectWg.hasOwnProperty('positionFixed')) this.selectWg.positionFixed = oldPosition
          });
          return
        }
        this.setPageFixed('fixedBottom', oldPosition)
      } else {
        this.pageData.list.push(this.selectWg)
        this.pageData.fixedBottom = []
      }
    },
    fixedCustom() {

    },
    setFixedCustom(oldPosition) {
      if (this.pageData.fixedCustom.length > 0) {
        if (this.pageData.fixedCustom.some(v => v.key === this.selectWg.key)) return
        this.$confirm('当前页面已有自定义悬浮组件，为保证视觉效果，是否替换当前组件？', '底部悬浮').then(() => {
          this.setPageFixed('fixedCustom', oldPosition)
        }).catch(() => {
          this.selectWg.positionFixed = oldPosition
        });
        return
      }
      this.setPageFixed('fixedCustom', oldPosition)
    },
    setPositionAuto(oldPosition) {
      let oldListKey = this.listKey[oldPosition];
      if (!oldListKey) return
      if (this.pageData[oldListKey].some(v => v.key === this.selectWg.key)) {
        this.pageData.list.push(this.selectWg)
        this.pageData[oldListKey] = []
        return;
      }
    }
  }
}
</script>