<template>
  <div class="file-upload-wrapper">
    <el-upload
      :before-upload="beforeAvatarUpload"
      :data="uploadData"
      :on-error="uploadError"
      :on-progress="handleProgress"
      :on-success="handleAvatarSuccess"
      :show-file-list="false"
      action="https://jsonplaceholder.typicode.com/posts/"
      class="avatar-uploader"
      ref="upload"
    >
      <img :src="value" :style="{height:height,width:width}" class="avatar" v-if="showImg" />
      <video :src="value" :style="{height:height,width:width}" class="avatar" v-else-if="showVideo" />
      <i class="el-icon-plus avatar-uploader-icon" v-else></i>
      <i @click.stop="removeFile()" class="el-icon-close avatar-close-icon" v-show="value"></i>
    </el-upload>
    <el-button @click="drawer=true" type="primary" v-if="showCompressor">压缩上传</el-button>
    <ImgUpload @fail="compressFail" @success="compressSuccess" v-model="drawer" />
    <transition name="el-fade-in-linear" v-if="uploading">
      <div class="flex flex-column flex-center uploader-progress">
        <el-progress :percentage="uploadPercentage" :width="100" class="progress" type="circle"></el-progress>
        <el-button @click.stop="cancelUpload()" class="mg-t10" type="text">取消上传</el-button>
      </div>
    </transition>
  </div>
</template>

<script>
import ImgUpload from './img-upload'

const TYPE_IMG = 'img', TYPE_VIDEO = 'video';
export default {
  name: "FileUpload",
  components: {
    ImgUpload
  },
  props: {
    value: String,
    height: String,
    width: String,
    type: {
      type: String,
      default: TYPE_IMG
    }
  },
  data() {
    return {
      drawer: false,
      videoTypeList: ['video/mp4'],
      imgTypeList: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'],
      uploading: false,
      uploadPercentage: 0,
      uploadData: {
        yourData: "yunyi"
      }
    }
  },
  computed: {
    showCompressor() {
      return this.type === TYPE_IMG
    },
    showImg() {
      return this.value && this.type === TYPE_IMG
    },
    showVideo() {
      return this.value && this.type === TYPE_VIDEO
    }
  },
  methods: {
    compressSuccess(compressUrl) {
      this.$emit('update:value', compressUrl);
    },
    compressFail() {
    // compressFail(err) {
      this.$message({
        message: '压缩出错啦~',
        type: 'error'
      });
    },
    resetUpload() {
      this.uploading = false;
      this.uploadPercentage = 0;
    },
    startUpload() {
      this.uploading = true;
    },
    cancelUpload() {
      if (!this.uploading) return;
      this.$refs.upload.abort();
      this.$message({
        message: '已取消上传',
        type: 'warning'
      });
      return this.resetUpload();
    },
    removeFile() {
      this.$emit('update:value', '');
    },
    handleAvatarSuccess(res, file) {
      this.$emit('update:value', URL.createObjectURL(file.raw));
      if (this.uploadPercentage !== 100) this.uploadPercentage = 100;
      setTimeout(() => {
        this.resetUpload()
      }, 500);
    },
    // uploadError(err) {
    uploadError() {
      // console.log(err);
      this.resetUpload()
      this.$alert('网络繁忙，请稍后重试');
    },
    beforeAvatarUpload(file) {
      if (this.type === TYPE_IMG) return this.imgUpload(file)
      if (this.type === TYPE_VIDEO) return this.videoUpload(file)
      return false
    },
    handleProgress(event, file) {
      this.uploadPercentage = parseInt(file.percentage, 10);
    },
    imgUpload(file) {
      const isImg = this.imgTypeList.includes(file.type)
      const isLt1M = file.size / 1024 <= 50;
      if (!isImg) {
        this.$message.error('请上传图片');
        return false
      }
      if (isLt1M) {
        this.startUpload()
        return true
      } else {
        this.$message.error('上传图片大小不能超过 50 K !');
        return false
      }
    },
    videoUpload(file) {
      const isVideo = this.videoTypeList.includes(file.type)
      const isLt200M = file.size / 1024 / 1024 <= 100;
      if (!isVideo) {
        this.$message.error('请上传视频文件');
        return false
      }
      if (isLt200M) {
        this.startUpload()
        return true
      } else {
        this.$message.error('上传视频大小不能超过 100 M !');
        return false
      }
    }
  }
}
</script>

<style lang="stylus">
.file-upload-wrapper {
  .avatar-uploader {
    width: 102px;
    height: 102px;
    margin-bottom: 10px;
  }

  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409eff;

    .avatar-close-icon {
      display: block;
    }
  }

  .uploader-progress {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background-color: rgba(0, 0, 0, 0.7);

    .el-progress__text {
      color: #fff;
    }
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
    border: 1px dashed #d9d9d9;
  }

  .avatar-close-icon {
    display: none;
    position: absolute;
    right: -8px;
    top: -8px;
    color: #409eff;
    font-size: 18px;
    border: 1px dashed #409eff;
    border-radius: 18px;
    transition: 0.3s;
    background-color: #fff;

    &:hover {
      transform: scale(1.3);
    }
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>
