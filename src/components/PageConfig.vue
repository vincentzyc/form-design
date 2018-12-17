<template>
  <div class="form-config-container">
    <el-form label-position="top">
      <el-form-item label="页面标题">
        <el-input v-model="pageData.config.title"></el-input>
      </el-form-item>
    </el-form>
    <!-- <button @click="test()">testetetse</button> -->
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState({
      pageData: state => state.common.pageData
    })
  },
  methods: {
    test() {
      console.log(this.$store.state);
    }
  }
}
</script>
