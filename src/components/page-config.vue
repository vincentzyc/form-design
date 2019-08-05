<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="基础设置" name="base">
          <el-form-item label="页面标题">
            <el-input v-model="pageData.config.title"></el-input>
          </el-form-item>
          <el-form-item label="页面背景色">
            <el-color-picker v-model="pageData.config.backgroundColor" />
          </el-form-item>
          <el-form-item label="页面背景图片">
            <ImgUpload :value.sync="pageData.config.backgroundImage" />
          </el-form-item>
          <el-form-item label="页面统计ID">
            <el-input type="number" v-model="pageData.config.countId"></el-input>
          </el-form-item>
          <el-form-item label="主题" v-if="themes.length>0">
            <el-radio-group v-model="selectTheme" @change="setTheme">
              <el-radio-button v-for="item in themes" :label="item.value" :key="item.value">{{item.name}}</el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-collapse-item>

        <el-collapse-item title="主题设置" name="theme" v-if="pageData.config.theme">
          <el-form-item label="图片上传">
            <ImgUpload :value.sync="pageData.config.theme.banner" />
          </el-form-item>
          <el-form-item label="内容区域宽度" v-if="pageData.config.theme.hasOwnProperty('contentWidth')">
            <el-radio-group v-model="pageData.config.theme.contentWidth" size="mini">
              <el-radio-button label="100%"></el-radio-button>
              <el-radio-button label="90%"></el-radio-button>
              <el-radio-button label="80%"></el-radio-button>
              <el-radio-button label="70%"></el-radio-button>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="内容区域圆角" v-if="pageData.config.theme.hasOwnProperty('borderRadius')">
            <el-switch v-model="pageData.config.theme.borderRadius"></el-switch>
          </el-form-item>
          <el-form-item label="内容区域位置（上 右 下 左 、空格隔开）" v-if="pageData.config.theme.hasOwnProperty('margin')">
            <el-input v-model="pageData.config.theme.margin"></el-input>
          </el-form-item>
        </el-collapse-item>
      </el-collapse>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import pageConfigData from '@/assets/json/page-config.json'
export default {
  data() {
    return {
      activeName: 'base',
      themes: pageConfigData.themes,
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
      this.pageData.config.backgroundColor = this.pageData.config.theme.backgroundColor;
    }
  }
}
</script>
