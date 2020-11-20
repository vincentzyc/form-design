<template>
  <div v-if="selectWg && Object.keys(selectWg).length > 0">
    <el-form label-position="top">
      <el-collapse accordion v-model="wgCollapse">
        <el-collapse-item name="base" title="基础设置">
          <BaseConfig :selectWg="selectWg" />
        </el-collapse-item>

        <el-collapse-item name="tag" title="标签设置" v-if="selectWg.label&&selectWg.showLabel!==false">
          <TagConfig :selectWg="selectWg" />
        </el-collapse-item>

        <el-collapse-item name="style" title="外观样式" v-if="selectWg.hasOwnProperty('style')">
          <StyleConfig :selectWg="selectWg" />
        </el-collapse-item>

        <el-collapse-item name="animation" title="动画设置" v-if="selectWg.hasOwnProperty('animation')">
          <AnimationConfig :selectWg="selectWg" />
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import BaseConfig from "./base-config"
import TagConfig from "./tag-config"
import StyleConfig from "./style-config"
import AnimationConfig from "./animation-config"

export default {
  components: {
    BaseConfig,
    TagConfig,
    StyleConfig,
    AnimationConfig
  },
  computed: {
    wgCollapse: {
      get() {
        return this.$store.state.common.wgCollapse
      },
      set(val) {
        this.$store.commit('setWgCollapse', val)
      }
    },
    ...mapState({
      selectWg: state => state.common.selectWg
    })
  }
}
</script>
