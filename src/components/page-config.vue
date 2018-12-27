<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-form-item label="页面标题" v-if="pageData.config.hasOwnProperty('title')">
        <el-input v-model="pageData.config.title"></el-input>
      </el-form-item>
      <el-form-item label="主题" v-if="themes.length>0">
        <el-radio-group v-model="selectTheme" @change="setTheme">
          <el-radio-button v-for="item in themes" :label="item.value" :key="item.value">{{item.name}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="图片上传" v-if="pageData.config.theme">
        <ImgUpload :value.sync="pageData.config.theme.banner"/>
      </el-form-item>
      <el-form-item label="页面背景色" v-if="pageData.config.hasOwnProperty('background')">
        <el-color-picker v-model="pageData.config.background"/>
      </el-form-item>
      <el-form-item label="内容区域宽度" v-if="pageData.config.theme&&pageData.config.theme.hasOwnProperty('contentWidth')">
        <el-radio-group v-model="pageData.config.theme.contentWidth" size="mini">
          <el-radio-button label="90%"></el-radio-button>
          <el-radio-button label="80%"></el-radio-button>
          <el-radio-button label="70%"></el-radio-button>
          <el-radio-button label="60%"></el-radio-button>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import allFieldTypes from '@/assets/json/field-types.json'
export default {
  data() {
    return {
      themes: allFieldTypes.themes,
    }
  },
  computed: {
    selectTheme: {
      get() {
        return this.$store.state.common.selectTheme
      },
      set(val) {
        this.$store.commit('setSelectTheme', val)
      }
    },
    ...mapState({
      pageData: state => state.common.pageData
    })
  },
  methods: {
    setTheme(val) {
      this.pageData.config.theme = this.themes.find(item => val === item.value);
      this.pageData.config.background = this.pageData.config.theme.background;
    }
  }
}
</script>
