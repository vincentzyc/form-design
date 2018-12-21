<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-form-item label="页面标题" v-if="typeof(pageData.config.title)!=='undefined'">
        <el-input v-model="pageData.config.title"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      pageData: state => state.common.pageData
    })
  }
}
</script>
