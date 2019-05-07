<template>
  <el-upload
    class="avatar-uploader"
    action="https://jsonplaceholder.typicode.com/posts/"
    :show-file-list="false"
    :on-success="handleAvatarSuccess"
    :before-upload="beforeAvatarUpload"
    :on-error="uploadError"
  >
    <img v-if="value" :src="value" class="avatar">
    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
  </el-upload>
</template>
<script>
export default {
  name: "ImgUpload",
  props: {
    value: String
  },
  methods: {
    /* eslint-disable */
    handleAvatarSuccess(res, file) {
      this.$emit('update:value', URL.createObjectURL(file.raw))
      this.fullLoading.close()
    },
    uploadError(err) {
      console.log(err);
      this.fullLoading.close();
      this.$alert('网络繁忙，请稍后重试')
    },
    beforeAvatarUpload(file) {
      const isLt2M = file.size / 1024 < 20;
      if (!isLt2M) {
        this.$message.error('上传图片大小不能超过 20 KB!');
      } else {
        this.fullLoading = this.$loading({
          text: '正在上传'
        });
      }
      return isLt2M;
    },
  }
}
</script>

