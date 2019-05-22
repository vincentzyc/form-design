<template>
  <div v-if="selectWg && Object.keys(selectWg).length > 0">
    <el-form label-position="top">
      <el-collapse v-model="wgCollapse" accordion>
        <el-collapse-item title="基础设置" name="base">
          <BaseConfig :selectWg="selectWg"/>
        </el-collapse-item>

        <el-collapse-item title="标签设置" name="tag" v-if="selectWg.label&&selectWg.showLabel!==false">
          <TagConfig :selectWg="selectWg"/>
        </el-collapse-item>

        <el-collapse-item title="外观样式" name="style" v-if="selectWg.hasOwnProperty('style')">
          <StyleConfig :selectWg="selectWg"/>
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

export default {
  components: {
    BaseConfig,
    TagConfig,
    StyleConfig
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
  },
  methods: {

  }
}
</script>
