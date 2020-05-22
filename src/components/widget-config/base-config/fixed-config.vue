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
    <el-form-item label="设置页面滑动距离显示悬浮内容" v-if="setScrollHeight">
      <p class="lh24 c999 fs12">请预览查看具体效果（0则一直显示）</p>
      <el-input-number v-model="selectWg.scrollHeight" :min="0" :max="1000" :step="1" step-strictly size="small" />
      <span class="mg-l10">px</span>
    </el-form-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const BOTTOM_NAME = 'bottom',
  CUSTOM_NAME = 'custom',
  AUTO_NAME = 'auto';

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
        [BOTTOM_NAME]: 'fixedBottom',
        [CUSTOM_NAME]: 'fixedCustom',
        [AUTO_NAME]: 'list',
      }
    }
  },
  watch: {
    'selectWg.positionFixed': {
      handler(newValue, oldValue) {
        if (newValue && oldValue) {
          if (newValue === BOTTOM_NAME) return this.setFixedBottom(oldValue)
          if (newValue === CUSTOM_NAME) return this.setFixedCustom(oldValue)
          if (newValue === AUTO_NAME) return this.setPositionAuto(oldValue)
        }
      },
      immediate: true
    }
  },
  computed: {
    setScrollHeight() {
      return (this.selectWg.fixedBottom || this.selectWg.positionFixed === BOTTOM_NAME) && this.selectWg.hasOwnProperty('scrollHeight')
    },
    ...mapState({
      pageData: state => state.common.pageData,
    })
  },
  methods: {
    positionConfig(p) {
      if (p === CUSTOM_NAME) {
        if (this.selectWg.style?.margin) this.$delete(this.selectWg.style, 'margin');
        this.$set(this.selectWg, 'position', { side: 'left', top: 100, left: 0 });
        return
      }
      if (p === BOTTOM_NAME) {
        this.$set(this.selectWg, 'scrollHeight', 0);
      }
      if (this.selectWg.style) this.$set(this.selectWg.style, 'margin', '0px 0px 0px 0px');
      if (this.selectWg.position) this.$delete(this.selectWg, 'position');
    },
    deleteArrayEle(array, key) {
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.key === key) return array.splice(index, 1);
        if (Array.isArray(element.list) && element.list.length > 0) this.deleteArrayEle(element.list, key)
      }
    },
    setPageFixed(key, oldPosition) {
      let oldListKey = this.listKey[oldPosition];
      if (!oldListKey) return
      this.deleteArrayEle(this.pageData[oldListKey], this.selectWg.key);
      this.pageData[key] = [];
      this.pageData[key].push(this.selectWg)
    },
    // 为兼容之前底部悬浮配置，oldPosition可能为boolean值
    setFixedBottom(oldPosition) {
      if (oldPosition) {
        if (oldPosition === true) oldPosition = AUTO_NAME; // 兼容之前底部悬浮配置
        if (this.pageData.fixedBottom?.length > 0) {
          if (this.pageData.fixedBottom.some(v => v.key === this.selectWg.key)) return
          // 可支持多个悬浮，目前未开放，限制一个 
          this.$confirm('当前页面已有底部悬浮，为保证视觉效果，是否替换当前组件？', '底部悬浮').then(() => {
            this.positionConfig(BOTTOM_NAME);
            this.setPageFixed(this.listKey[BOTTOM_NAME], oldPosition)
          }).catch(() => {
            if (this.selectWg.hasOwnProperty('fixedBottom')) this.selectWg.fixedBottom = false;
            if (this.selectWg.hasOwnProperty('positionFixed')) this.selectWg.positionFixed = oldPosition
          });
          return
        }
        this.positionConfig(BOTTOM_NAME);
        this.setPageFixed(this.listKey[BOTTOM_NAME], oldPosition)
      } else {
        this.pageData.list.push(this.selectWg)
        this.pageData.fixedBottom = []
      }
    },
    setFixedCustom(oldPosition) {
      if (this.pageData.fixedCustom?.length > 0) {
        if (this.pageData.fixedCustom.some(v => v.key === this.selectWg.key)) return
        // 可支持多个悬浮，目前未开放，限制一个 
        this.$confirm('当前页面已有自定义悬浮组件，为保证视觉效果，是否替换当前组件？', '自定义悬浮').then(() => {
          this.positionConfig(CUSTOM_NAME);
          this.setPageFixed(this.listKey[CUSTOM_NAME], oldPosition)
        }).catch(() => {
          this.selectWg.positionFixed = oldPosition
        });
        return
      }
      this.positionConfig(CUSTOM_NAME);
      this.setPageFixed(this.listKey[CUSTOM_NAME], oldPosition)
    },
    setPositionAuto(oldPosition) {
      let oldListKey = this.listKey[oldPosition];
      if (!oldListKey) return
      if (this.pageData[oldListKey].some(v => v.key === this.selectWg.key)) {
        this.positionConfig(AUTO_NAME);
        this.pageData.list.push(this.selectWg)
        this.pageData[oldListKey] = []
        return;
      }
    }
  }
}
</script>