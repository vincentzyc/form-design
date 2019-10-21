<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-form-item label="页面标题">
        <el-input v-model.trim="pageData.title"></el-input>
      </el-form-item>
      <el-form-item label="页面背景色">
        <el-color-picker v-model="pageData.style.backgroundColor" />
      </el-form-item>
      <el-form-item label="页面背景图片">
        <ImgUpload :value.sync="pageData.style.backgroundImage" />
      </el-form-item>
      <el-form-item label="主题" v-if="themes.length>0">
        <el-radio-group v-model="pageData.theme" @change="setTheme">
          <el-radio-button v-for="item in themes" :label="item.value" :key="item.value">{{item.name}}</el-radio-button>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="页面统计代码">
        <el-input type="textarea" :rows="4" placeholder="请输入统计代码" v-model="pageData.statsCode"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import pageConfigData from '@/assets/js/page-config.js'
export default {
  data() {
    return {
      themes: pageConfigData.themes,
    }
  },
  computed: {
    ...mapState({
      pageData: state => state.common.pageData
    })
  },
  methods: {
    setTheme(val) {
      let i = this.themes.findIndex(item => item.value === val);
      this.$store.commit("setPageData", this.$util.deepClone(this.themes[i].pageData));
    }
  }
}
</script>
