<template>
  <div>
    <el-form-item label="显示位置" v-if="$util.hasKey(selectWg,'positionFixed')">
      <el-radio-group v-model="selectWg.positionFixed" size="mini">
        <el-radio-button v-for="type in fixedTypeList" :label="type" :key="type">{{fixedName[type]}}</el-radio-button>
      </el-radio-group>
    </el-form-item>
    <div v-if="$util.hasKey(selectWg,'position')">
      <el-form-item label="悬浮位置">
        <el-radio-group v-model="selectWg.position.side" size="small">
          <el-radio-button label="left">左悬浮</el-radio-button>
          <el-radio-button label="right">右悬浮</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="左边距(%)" v-show="selectWg.position.side==='left'">
        <el-slider v-model="selectWg.position.left" class="pd-l10 pd-r10"></el-slider>
      </el-form-item>
      <el-form-item label="右边距(%)" v-show="selectWg.position.side==='right'">
        <el-slider v-model="selectWg.position.right" class="pd-l10 pd-r10"></el-slider>
      </el-form-item>
      <el-form-item label="上边距(px)">
        <el-input-number v-model="selectWg.position.top" :precision="0" :min="0" :step="5" size="small" />
      </el-form-item>
    </div>
    <el-form-item label="设置页面滑动距离显示悬浮内容" v-if="setScrollHeight">
      <p class="lh24 c999 fs12">请预览查看具体效果（0则一直显示）</p>
      <el-input-number v-model="selectWg.scrollHeight" :min="0" :max="1000" :step="1" step-strictly size="small" />
      <span class="mg-l10">px</span>
    </el-form-item>
  </div>
</template>

<script>
import { mapState } from 'vuex';

const TOP_NAME = 'top',
  BOTTOM_NAME = 'bottom',
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
      fixedTypes: [AUTO_NAME, TOP_NAME, BOTTOM_NAME, CUSTOM_NAME],
      listKey: {
        [TOP_NAME]: 'fixedTop',
        [BOTTOM_NAME]: 'fixedBottom',
        [CUSTOM_NAME]: 'fixedCustom',
        [AUTO_NAME]: 'list',
      },
      fixedName: {
        [TOP_NAME]: '顶部悬浮',
        [BOTTOM_NAME]: '底部悬浮',
        [CUSTOM_NAME]: '自定义悬浮',
        [AUTO_NAME]: '正常'
      }
    }
  },
  watch: {
    'selectWg.positionFixed': {
      handler(newValue, oldValue) {
        if (newValue && oldValue) {
          if (newValue === AUTO_NAME) return this.setPositionAuto(oldValue)
          this.setFixedPosition(newValue, oldValue)
        }
      },
      immediate: true
    }
  },
  computed: {
    fixedTypeList() {
      if (!Array.isArray(this.selectWg.fixedTypes)) return this.fixedTypes;
      return this.selectWg.fixedTypes.filter(v => this.fixedTypes.includes(v))
    },
    setScrollHeight() {
      return [TOP_NAME, BOTTOM_NAME].includes(this.selectWg.positionFixed) && Object.prototype.hasOwnProperty.call(this.selectWg, 'scrollHeight')
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
      if (p === TOP_NAME || p === BOTTOM_NAME) {
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
    setFixedPosition(newPosition, oldPosition) {
      if (this.pageData[this.listKey[newPosition]]?.length > 0) {
        if (this.pageData[this.listKey[newPosition]].some(v => v.key === this.selectWg.key)) return
        // 可支持多个组件悬浮，目前未开放，限制一个 
        this.$confirm(`当前页面已有${this.fixedName[newPosition]}组件，为保证视觉效果，是否替换当前组件？`, this.fixedName[newPosition]).then(() => {
          this.positionConfig(newPosition);
          this.setPageFixed(this.listKey[newPosition], oldPosition)
        }).catch(() => {
          this.selectWg.positionFixed = oldPosition
        });
        return
      }
      this.positionConfig(newPosition);
      this.setPageFixed(this.listKey[newPosition], oldPosition)
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