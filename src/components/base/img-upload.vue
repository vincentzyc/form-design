<template>
  <el-form-item label="图片上传">
    <el-upload
      class="avatar-uploader"
      :action="$api.apiUrl()+'supermarketloan/mgr/eventmarket/uploadeventmarketimg'"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :on-error="uploadError"
    >
      <img v-if="value" :src="value" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
  </el-form-item>
</template>
<script>
export default {
  name: "ImgUpload",
  props: {
    value: String
  },
  methods: {
    handleAvatarSuccess(res, file, fileList) {
      this.$emit('update:value', res.data)
      this.fullLoading.close()
    },
    uploadError(err, file, fileList) {
      console.log(err);
      this.fullLoading.close();
      this.$alert('网络繁忙，请稍后重试')
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 / 1024 < 1;
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 1MB!');
      }
      this.fullLoading = this.$loading({
        text: '正在上传'
      });
      return isLt2M;
    },
  }
}
</script>

